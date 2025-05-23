import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {DialogPosition, MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, ValidationErrors, Validators} from "@angular/forms";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {SnackBarNotifierService} from "../../shared/components/snack-bar/snack-bar-notifier.service";
import {finalize, map, startWith} from "rxjs/operators";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {
    ConfirmationDialogBoxComponent
} from "../../shared/components/confirmation-dialog-box/confirmation-dialog-box.component";
import {City} from "./city.pagination.model";
import {CityService} from "./city.service";
import {State} from "../state/state-pagination.model";
import {Country} from "../country/country-pagination.model";
import {CustomColumnSchema} from "../../shared/model/response.model";

@Component({
    selector: 'app-city',
    templateUrl: './city.component.html',
    styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit, AfterViewInit {

    columns: any;

    city = new City();
    city$!: Observable<City>;
    cities$!: Observable<City[]>;
    countries$!: Observable<Country[]>;
    states$!: Observable<State[]>;
    cityId = '';

    subscription: Subscription[] = [];
    position: DialogPosition = {top: '0', left: '0'};
    formGroup!: FormGroup;
    filterControl = new FormControl([]);
    filterMatChipListControl = new FormControl([]);
    filteredColumns: CustomColumnSchema[] = [];
    filterValues = {};
    filterSelectObj = [];
    isLoading = false;
    totalRows: number | null | undefined = 0;
    pageSize = 5;
    currentPage = 0;
    pageSizeOptions = [5, 10, 25, 100];
    dataSource!: MatTableDataSource<City>;
    clickedRows = new Set<City>();
    searchControl: FormControl;
    filteredSearches: Observable<string[]>;
    filterDictionary = new Map<string, string>();
    selected = ['City Name'];
    allFilters = ['City Name', 'City Short Name', 'City Code', 'Is Active'];
    color = 'accent';
    errors = [];
    formErrors = {
        cityName: '',
        cityShortName: '',
        cityCode: '',
        stateId: '',
        countryId: '',
        isActive: [false]
    };
    validationMessages = {
        cityName: {
            required: 'This is required.',
            minlength: 'Minimum 1 characters needed.',
            maxlength: 'Maximum 45 characters allowed.'
        },
        cityShortName: {
            required: 'This is required.',
            minlength: 'Minimum 2 characters needed.',
            maxlength: 'Maximum 15 characters allowed.'
        },
        cityCode: {
            required: 'This is required.',
            minlength: 'Minimum 1 characters needed.',
            maxlength: 'Maximum 7 characters allowed.'
        },
        countryId: {
            required: 'This is required.'
        },
        stateId: {
            required: 'This is required.'
        }
    };
    dbColumns = [
        'cityId',
        'cityName',
        'cityShortName',
        'cityCode',
        'stateId',
        'state',
        'countryId',
        'country',
        'isActive',
        'edit',
        'delete'
    ];
// It would be better to have this strongly typed to match all the possible filtering criteria.
    filterObject = {
        search: "",
        errorTypes: []
    };
    displayedColumns: CustomColumnSchema[] = [
        {position: 0, dataColumnName: 'cityId', headerColumnName: 'City ID', isActive: true, isMandatory: false, isHidden: true},
        {
            position: 1,
            dataColumnName: 'cityName',
            headerColumnName: 'City Name',
            isActive: true,
            isMandatory: true,
            isHidden: false
        },
        {
            position: 2,
            dataColumnName: 'cityShortName',
            headerColumnName: 'City Short Name',
            isActive: true,
            isMandatory: true,
            isHidden: false
        },
        {
            position: 3,
            dataColumnName: 'cityCode',
            headerColumnName: 'City Code',
            isActive: true,
            isMandatory: true,
            isHidden: false
        },
        {
            position: 4,
            dataColumnName: 'stateId',
            headerColumnName: 'State Id',
            isActive: true,
            isMandatory: false,
            isHidden: true
        },
        {
            position: 5,
            dataColumnName: 'state',
            headerColumnName: 'State',
            isActive: true,
            isMandatory: false,
            isHidden: false
        },
        {
            position: 6,
            dataColumnName: 'countryId',
            headerColumnName: 'Country Id',
            isActive: true,
            isMandatory: false,
            isHidden: true
        },
        {
            position: 7,
            dataColumnName: 'country',
            headerColumnName: 'Country',
            isActive: true,
            isMandatory: false,
            isHidden: false
        },
        {
            position: 8,
            dataColumnName: 'isActive',
            headerColumnName: 'Status',
            isActive: true,
            isMandatory: false,
            isHidden: false
        },
        {
            position: 9, dataColumnName: 'edit', headerColumnName: 'Edit', isActive: true, isMandatory: false,
            isHidden: true
        },
        {
            position: 10, dataColumnName: 'delete', headerColumnName: 'Delete', isActive: true, isMandatory: false,
            isHidden: true
        },
    ];
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
    @ViewChild('auto') auto!: ElementRef<HTMLInputElement>;
    @ViewChild('input') input!: ElementRef;
    private snackbar = null;

    constructor(
        private fb: FormBuilder,
        private service: CityService,
        private snackBarNotifierService: SnackBarNotifierService,
        private dialog: MatDialog,
    ) {
        /*this.filterSelectObj = [
            {
                name: 'City Id',
                columnProp: 'cityId',
                options: []
            }, {
                name: 'City Name',
                columnProp: 'cityName',
                options: []
            }, {
                name: 'City Short Name',
                columnProp: 'cityShortName',
                options: []
            }, {
                name: 'City Code',
                columnProp: 'cityCode',
                options: []
            }, {
                name: 'Country Id',
                columnProp: 'countryId',
                options: []
            }, {
                name: 'State Id',
                columnProp: 'stateId',
                options: []
            }, {
                name: 'Status',
                columnProp: 'isActive',
                options: []
            }
        ];   */
        this.searchControl = new FormControl();
        //this.searchControl.reset();
        /*this.searchControl.markAsPristine();
        this.searchControl.markAsUntouched();*/
        this.filteredSearches = this.searchControl.valueChanges.pipe(
            startWith(null),
            map((search: string | null) => search ? this.filterSearches(search) : this.allFilters.slice()),
        );
    }


    // This handles the change of your search. Personally I would bind it to FormControl using reactive forms, but I guess that's a matter of preference
    /*search(e: Event): void {
        this.filterObject.search = (event.target as HTMLInputElement).value;
        this.dataSource.filter = JSON.stringify(this.filterObject);
    }*/

    // Handle changes of your select. Not sure about the typing here either since you didn't provide stackblitz.
    /*matSelectChanged(selectedItems: string[]): void {
        this.filterObject.errorTypes = selectedItems;
        this.dataSource.filter = JSON.stringify(this.filterObject);
    }*/

    ngAfterViewInit() {

        // Set this once after your datasource have been initialized, and don't change it afterwards. It needs to handle all combinations of different filters that you apply.
        /*this.dataSource.filterPredicate = (row: MyObject, filter: string) => {
            const filterObj = JSON.parse(filter);
            return (!filterObj.search || row.name.includes(filterObj.search)) &&
                (this.filterObject.errorTypes.length === 0 || this.filterObject.errorTypes.some(e => e === row.error))
        }*/
    }

    ngOnDestroy() {
        this.subscription.forEach(sub => sub.unsubscribe());
    }

    ngOnInit() {

        this.initializeColumnProperties();

        this.subscription.push(
            this.getCountryDropDown().subscribe(project => project)
        );

        this.subscription.push(
            this.loadGridView()
        );

        this.subscription.push(
            this.rebuildForm()
        );
    }

    /*
    
        getFilterObject(fullObj, key) {
            const uniqChk = [];
            fullObj.filter(obj => {
                if (!uniqChk.includes(obj[key])) {
                    uniqChk.push(obj[key]);
                }
                return obj;
            });
            return uniqChk;
        }
    */

    onFilterRemoved(filter: string) {
        const filters = this.filterControl.value as string[];
        this.removeFirst(filters, filter);
        // @ts-ignore
        this.filterControl.setValue(filters); // To trigger change detection
    }

    clear() {
        this.searchControl.setValue('');
    }

    applyFilter(event: Event) {

        /*this.filterValues[filter.columnProp] = (event.target as HTMLInputElement).value.trim().toLowerCase();
        this.dataSource.filter = JSON.stringify(this.filterValues);*/

        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    onFilterChange(filter: any, $event: any) {

        // @ts-ignore
        this.filterValues[filter.columnProp] = $event.value.trim().toLowerCase();
        this.dataSource.filter = JSON.stringify(this.filterValues);

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    applyFilter3(event: Event) {
        const filter = this.filterControl.value;
        const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
        // @ts-ignore
        this.filterDictionary.set(filter.find(x => x.dataColumnName).dataColumnName, filterValue);
        this.dataSource.filter = JSON.stringify(Array.from(this.filterDictionary.entries()));
    }

    resetFilters() {
        this.filterValues = {};
        this.filterSelectObj.forEach((value, key) => {
            // @ts-ignore
            value.modelValue = undefined;
        });
        this.dataSource.filter = "";
    }

    getCountryDropDown() {
        // @ts-ignore
        return this.countries$ = this.service.getCountryDropDown();
    }

    getStateDropDown(id: any) {
        // @ts-ignore
        return this.states$ = this.service.getStateDropDown(id, null, null);
    }

    getCity(cityId: string) {
        return this.city$ = this.service.getCity(cityId);
    }

    loadGridView() {

        const cities$ = this.service.getCities(this.currentPage, this.pageSize)
            .pipe(
                map(project => project),
            );
        // @ts-ignore
        this.cities$ = cities$.pipe(map(project => project?.items));

        return cities$.subscribe(project => {
            this.totalRows = project?.totalCount;
            //this.paginator.pageIndex = this.currentPage;
            //this.paginator.length = countries.items.length;            
            // @ts-ignore
            this.dataSource = new MatTableDataSource(project?.items);
            //this.dataSource.filterPredicate = this.createFilter();

            this.filterSelectObj.filter(o => {
                // @ts-ignore
                o.options = this.getFilterObject(project?.items, o.columnProp);
            });
            if (!this.dataSource.paginator) {
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
            }
            return project?.items;
        });
    }

    getFilteredColumnListOnly(filteredColumns: CustomColumnSchema[]) {
        return filteredColumns.filter(x => !x.isHidden);
    }

    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.dbColumns, event.previousIndex, event.currentIndex);
    }

    pageChanged(event: PageEvent) {
        this.pageSize = event.pageSize;
        this.currentPage = event.pageIndex;
        this.loadGridView();
    }

    toggleColumn(filteredColumn: CustomColumnSchema) {

        if (filteredColumn.isActive) {
            // @ts-ignore
            if (filteredColumn.position > this.dbColumns.length - 1) {
                // @ts-ignore
                this.dbColumns.push(filteredColumn.dataColumnName);
            } else {
                // @ts-ignore
                this.dbColumns.splice(filteredColumn.position, 0, filteredColumn.dataColumnName);
            }
        } else {
            // @ts-ignore
            let i = this.dbColumns.indexOf(filteredColumn.dataColumnName),
                opr = i > -1 ? this.dbColumns.splice(i, 1) : undefined;
        }
    }

    initializeColumnProperties() {
        this.dbColumns.map((value: any, index) => {

            if (value != 'cityId')
                this.filteredColumns.push(
                    {
                        position: index,
                        dataColumnName: value,
                        headerColumnName: this.displayedColumns.filter(row => row.dataColumnName === value).map(function (row, index) {
                            return row.headerColumnName;
                        })[0],
                        isActive: this.displayedColumns.filter(row => row.dataColumnName === value).map(function (row, index) {
                            return row.isActive;
                        })[0],
                        isMandatory: this.displayedColumns.filter(row => row.dataColumnName === value).map(function (row, index) {
                            return row.isMandatory;
                        })[0],
                        isHidden: this.displayedColumns.filter(row => row.dataColumnName === value).map(function (row, index) {
                            return row.isHidden;
                        })[0]
                    }
                );
        });
    }

    save(formDirective?: FormGroupDirective) {
        if (this.formGroup.valid) {

            const city = this.formGroup.value;
            this.service.saveCity(city)
                .subscribe(response => this.snackBarNotifierService.showNotification(':: Successfully saved!!!', 'Dismiss', 'success'), error => {

                    const validationErrors = error.error.errors as ValidationErrors;
                    this.snackBarNotifierService.showNotification(':: Duplicate entry found!!!', 'Dismiss', 'error');

                    Object.keys(validationErrors).forEach(prop => {
                        const formControl = this.formGroup.get(prop);
                        if (formControl) {
                            formControl.setErrors({
                                serverError: validationErrors[prop].errors.map((a: { errorMessage: any; }) => a.errorMessage)
                            });
                        }
                    });
                    this.snackBarNotifierService.showNotification(':: Duplicate entry found!!!', 'Dismiss', 'error');
                }, () => {

                    this.cityId = '';
                    // this.city$ = null;

                    this.loadGridView();
                    this.getCity(this.cityId);
                    this.rebuildForm(formDirective);
                });
        } else {
            this.snackBarNotifierService.showNotification(':: This form has an invalid data, please check the fields and re-enter valid data!!!', 'Dismiss', 'error');
        }
    }

    update(formDirective?: FormGroupDirective) {
        if (this.formGroup.valid) {

            const changes = this.formGroup.value;
            this.service.updateCity(changes).subscribe(response => this.snackBarNotifierService.showNotification(':: Successfully updated!!!', 'Dismiss', 'success'), error => {
                //console.log(error);
                const validationErrors = error.error.errors as ValidationErrors;
                this.snackBarNotifierService.showNotification(':: Duplicate entry found!!!', 'Dismiss', 'error');

                Object.keys(validationErrors).forEach(prop => {
                    const formControl = this.formGroup.get(prop);
                    if (formControl) {
                        formControl.setErrors({
                            serverError: validationErrors[prop].errors.map((a: { errorMessage: any; }) => a.errorMessage)
                        });
                    }
                });
            }, () => {
                this.cityId = '';
                // this.city$ = null;

                let btnSave = document.querySelector('#save');
                btnSave?.setAttribute('style', 'margin-right:10px;display:inline;');

                let btnUpdate = document.querySelector('#update');
                btnUpdate?.setAttribute('style', 'margin-right:10px;display:none;');

                let btnCancel = document.querySelector('#cancel');
                btnCancel?.setAttribute('style', 'margin-right:10px;display:none;');

                this.loadGridView();
                this.getCity(this.cityId);
                this.rebuildForm(formDirective);
            });
        } else {
            this.snackBarNotifierService.showNotification(':: This form has an invalid data, please check the fields and re-enter valid data!!!', 'Dismiss', 'error');
        }
        //this.router.navigate(['/books', this.bookId]);
    }

    cancel(formDirective?: FormGroupDirective) {

        this.cityId = '';
        // this.city$ = null;

        let btnSave = document.querySelector('#save');
        btnSave?.setAttribute('style', 'margin-right:10px;display:inline;');

        let btnUpdate = document.querySelector('#update');
        btnUpdate?.setAttribute('style', 'margin-right:10px;display:none;');

        let btnCancel = document.querySelector('#cancel');
        btnCancel?.setAttribute('style', 'margin-right:10px;display:none;');

        this.getCity(this.cityId);
        this.rebuildForm(formDirective);
        this.formGroup.updateValueAndValidity({onlySelf: true, emitEvent: true});
    }

    edit(row: { cityId: string; stateId: string }) {

        this.cityId = row.cityId;

        let btnSave = document.querySelector('#save');
        btnSave?.setAttribute('style', 'margin-right:10px;display:none;');

        let btnUpdate = document.querySelector('#update');
        btnUpdate?.setAttribute('style', 'margin-right:10px;display:inline;');

        let btnCancel = document.querySelector('#cancel');
        btnCancel?.setAttribute('style', 'margin-right:10px;display:inline;');
        this.getStateDropDown(row.stateId);
        this.getCity(row.cityId);
        this.rebuildForm();
    }

    delete(row: any) {
        const id = row.cityId;
        const dialogRef = this.openDialog(row.cityName);
        dialogRef.afterClosed().subscribe((confirmed: boolean) => {
            if (confirmed) {

                this.service.deleteCity(id)
                    .subscribe(response => this.snackBarNotifierService.showNotification(':: Successfully deleted!!!', 'Dismiss', 'success'), error => this.snackBarNotifierService.showNotification(':: ' + error.error + '!!!', 'Dismiss', 'error'), () => {

                        this.cityId = '';
                        // this.city$ = null;
                        this.loadGridView();
                        this.rebuildForm();
                    });
                // @ts-ignore
                this.snackbar.dismiss();

                //this.snackBarNotifierService.showNotification(':: Closing snack bar in a few seconds!!!', 'Dismiss', 'info');
            }
        });
    }

    rebuildForm(formDirective?: FormGroupDirective) {
        if (this.formGroup) {
            this.formGroup.reset();
            formDirective?.resetForm();
        }
        if (this.city$ == null) {
            this.getCity(this.cityId);
        }
        return this.city$
            .pipe(finalize(() => {
                this.formGroup = this.fb.group({
                    cityName: new FormControl(this.city.cityName, [Validators.required, Validators.minLength(3), Validators.maxLength(45)])
                    ,
                    cityShortName: new FormControl(this.city.cityShortName, [Validators.required, Validators.minLength(2), Validators.maxLength(15)])
                    ,
                    cityCode: new FormControl(this.city.cityCode, [Validators.required, Validators.minLength(1), Validators.maxLength(7)])
                    ,
                    cityId: new FormControl(this.city.cityId)
                    ,
                    countryId: new FormControl(this.city.countryId, [Validators.required])
                    ,
                    stateId: new FormControl(this.city.stateId, [Validators.required])
                    ,
                    isActive: new FormControl(this.city.isActive ?? true)
                    ,
                    save: new FormControl('Save', null)
                    ,
                    update: new FormControl('Update', null)
                    ,
                    clear: new FormControl('Clear', null)
                    ,
                    cancel: 'Cancel'
                });
                this.formGroup.valueChanges.subscribe(project => this.onValueChanged(project));
                this.onValueChanged();
            }))
            .subscribe(city => {
                //console.log(city);
                this.city = city;
            });
    }

    openDialog(data: any) {

        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        /*dialogConfig.position = {
            'top': '0',
            left: '0'
        };*/
        dialogConfig.data = {
            itemName: data,
            typeOfAction: 'delete'
        };

        //this.snackbar = this.snackBarNotifierService.showNotification(':: Please confirm delete action!!!', 'Dismiss', 'warn');

        return this.dialog.open(ConfirmationDialogBoxComponent, dialogConfig);
    }

    onValueChanged(data?: any) {
        if (!this.formGroup) {
            return;
        }
        const form = this.formGroup;
        for (const field in this.formErrors) {
            if (Object.prototype.hasOwnProperty.call(this.formErrors, field)) {
                // @ts-ignore
                this.formErrors[field] = '';
                const control = form.get(field);
                if (control && control.dirty && !control.valid) {
                    // @ts-ignore
                    const messages = this.validationMessages[field];
                    for (const key in control.errors) {
                        if (Object.prototype.hasOwnProperty.call(control.errors, key)) {
                            // @ts-ignore
                            this.formErrors[field] += messages[key] + ' ';
                        }
                    }
                }
            }
        }
    }

    private removeFirst<T>(array: T[], toRemove: T) {
        const index = array.indexOf(toRemove);
        if (index !== -1) {
            array.splice(index, 1);
        }
    }

    private filterSearches(value: string) {
        //const matches = value.toLowerCase();
        const matches = value ? this.allFilters.filter(s => new RegExp(`^${value}`, 'gi').test(s))
            : this.allFilters;
        return this.allFilters.filter(x => !this.selected.find(y => y)/* x.toLowerCase().includes(matches)*/);
    }
}
import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Area} from "../area/area.pagination.model";
import {Observable, Subscription} from "rxjs";
import {District} from "../district/district.pagination.model";
import {Country} from "../country/country-pagination.model";
import {State} from "../state/state-pagination.model";
import {City} from "../city/city.pagination.model";
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
import {Colony} from "./colony.pagination.model";
import {ColonyService} from "./colony.service";
import {CustomColumnSchema} from "../../shared/model/response.model";

@Component({
    selector: 'app-colony',
    templateUrl: './colony.component.html',
    styleUrls: ['./colony.component.css']
})
export class ColonyComponent implements OnInit, AfterViewInit {

    columns: any;

    colony = new Colony();
    colony$!: Observable<Colony>;
    colonies$!: Observable<Colony[]>;
    areas$!: Observable<Area[]>;
    districts$!: Observable<District[]>;
    countries$!: Observable<Country[]>;
    states$!: Observable<State[]>;
    cities$!: Observable<City[]>;
    colonyId = '';
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
    dataSource!: MatTableDataSource<Colony>;
    clickedRows = new Set<Colony>();
    searchControl: FormControl;
    filteredSearches: Observable<string[]>;
    filterDictionary = new Map<string, string>();
    selected = ['Colony Name'];
    allFilters = ['Colony Name', 'Colony Short Name', 'Is Active'];
    color = 'accent';
    errors = [];
    formErrors = {
        colonyName: '',
        colonyShortName: '',
        areaId: '',
        districtId: '',
        cityId: '',
        stateId: '',
        countryId: '',
        isActive: [false]
    };
    validationMessages = {
        colonyName: {
            required: 'This is required.',
            minlength: 'Minimum 1 characters needed.',
            maxlength: 'Maximum 45 characters allowed.'
        },
        colonyShortName: {
            required: 'This is required.',
            minlength: 'Minimum 2 characters needed.',
            maxlength: 'Maximum 15 characters allowed.'
        },
        areaId: {
            required: 'This is required.'
        },
        districtId: {
            required: 'This is required.'
        },
        cityId: {
            required: 'This is required.'
        },
        stateId: {
            required: 'This is required.'
        },
        countryId: {
            required: 'This is required.'
        }
    };
    dbColumns = [
        'colonyId',
        'colonyName',
        'colonyShortName',
        'areaId',
        'areaId',
        'districtId',
        'district',
        'cityId',
        'city',
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
        {
            position: 0,
            dataColumnName: 'colonyId',
            headerColumnName: 'Colony Id',
            isActive: true,
            isMandatory: false,
            isHidden: true
        },
        {
            position: 1,
            dataColumnName: 'colonyName',
            headerColumnName: 'Colony Name',
            isActive: true,
            isMandatory: true,
            isHidden: false
        },
        {
            position: 2,
            dataColumnName: 'colonyShortName',
            headerColumnName: 'Colony Short Name',
            isActive: true,
            isMandatory: true,
            isHidden: false
        },
        {
            position: 3,
            dataColumnName: 'areaId',
            headerColumnName: 'Area Id',
            isActive: true,
            isMandatory: false,
            isHidden: true
        },
        {
            position: 4,
            dataColumnName: 'area',
            headerColumnName: 'Area',
            isActive: true,
            isMandatory: false,
            isHidden: false
        },
        {
            position: 5,
            dataColumnName: 'districtId',
            headerColumnName: 'District Id',
            isActive: true,
            isMandatory: false,
            isHidden: true
        },
        {
            position: 6,
            dataColumnName: 'district',
            headerColumnName: 'District',
            isActive: true,
            isMandatory: false,
            isHidden: false
        },
        {
            position: 7,
            dataColumnName: 'cityId',
            headerColumnName: 'City Id',
            isActive: true,
            isMandatory: false,
            isHidden: true
        },
        {
            position: 8,
            dataColumnName: 'city',
            headerColumnName: 'City',
            isActive: true,
            isMandatory: false,
            isHidden: false
        },
        {
            position: 9,
            dataColumnName: 'stateId',
            headerColumnName: 'State Id',
            isActive: true,
            isMandatory: false,
            isHidden: true
        },
        {
            position: 10,
            dataColumnName: 'state',
            headerColumnName: 'State',
            isActive: true,
            isMandatory: false,
            isHidden: false
        },
        {
            position: 11,
            dataColumnName: 'countryId',
            headerColumnName: 'Country Id',
            isActive: true,
            isMandatory: false,
            isHidden: true
        },
        {
            position: 12,
            dataColumnName: 'country',
            headerColumnName: 'Country',
            isActive: true,
            isMandatory: false,
            isHidden: false
        },
        {
            position: 13,
            dataColumnName: 'isActive',
            headerColumnName: 'Status',
            isActive: true,
            isMandatory: false,
            isHidden: false
        },
        {
            position: 14, dataColumnName: 'edit', headerColumnName: 'Edit', isActive: true, isMandatory: false,
            isHidden: true
        },
        {
            position: 15, dataColumnName: 'delete', headerColumnName: 'Delete', isActive: true, isMandatory: false,
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
        private service: ColonyService,
        private snackBarNotifierService: SnackBarNotifierService,
        private dialog: MatDialog,
    ) {
        /*this.filterSelectObj = [
            {
                name: 'Colony Id',
                columnProp: 'colonyId',
                options: []
            }, {
                name: 'Colony Name',
                columnProp: 'colonyName',
                options: []
            }, {
                name: 'Colony Short Name',
                columnProp: 'colonyShortName',
                options: []
            }, {
                name: 'City Id',
                columnProp: 'cityId',
                options: []
            }, {
                name: 'State Id',
                columnProp: 'stateId',
                options: []
            }, {
                name: 'Country Id',
                columnProp: 'countryId',
                options: []
            }, {
                name: 'Status',
                columnProp: 'isActive',
                options: []
            }
        ];*/
        this.searchControl = new FormControl();

        this.filteredSearches = this.searchControl.valueChanges.pipe(
            startWith(null),
            map((search: string | null) => search ? this.filterSearches(search) : this.allFilters.slice()),
        );
    }

    ngAfterViewInit() {
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
    
        getFilterObject(fullObj: any[] | null | undefined, key: string | number) {
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
        //const filterValue = (event.target as HTMLInputElement).value;
        //this.dataSource.filter = filterValue.trim().toLowerCase();

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

    getCityDropDown(id: any) {
        // @ts-ignore
        return this.cities$ = this.service.getCityDropDown(id, null, null);
    }

    getDistrictDropDown(id: any) {
        // @ts-ignore
        return this.districts$ = this.service.getDistrictDropDown(id, null, null);
    }

    getAreaDropDown(id: any) {
        // @ts-ignore
        return this.areas$ = this.service.getAreaDropDown(id, null, null);
    }

    getColony(colonyId: string) {
        return this.colony$ = this.service.getColony(colonyId);
    }

    loadGridView() {

        const colonies$ = this.service.getColonies(this.currentPage, this.pageSize)
            .pipe(
                map(project => project),
            );
        // @ts-ignore
        this.colonies$ = colonies$.pipe(map(project => project.items));

        return colonies$.subscribe(project => {

            this.totalRows = project.totalCount;
            // @ts-ignore
            this.dataSource = new MatTableDataSource(project.items);
            //this.dataSource.filterPredicate = this.createFilter();

            this.filterSelectObj.filter(o => {
                // @ts-ignore
                o.options = this.getFilterObject(project.items, o.columnProp);
            });
            if (!this.dataSource.paginator) {
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
            }
            return project.items;
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

    toggleColumn(filteredColumn:CustomColumnSchema) {

        if (filteredColumn.isActive) {
            if (filteredColumn.position > this.dbColumns.length - 1) {
                this.dbColumns.push(filteredColumn.dataColumnName);
            } else {
                this.dbColumns.splice(filteredColumn.position, 0, filteredColumn.dataColumnName);
            }
        } else {
            let i = this.dbColumns.indexOf(filteredColumn.dataColumnName),
                opr = i > -1 ? this.dbColumns.splice(i, 1) : undefined;
        }
    }

    initializeColumnProperties() {
        this.dbColumns.map((value: any, index) => {

            if (value != 'colonyId')
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

            const colony = this.formGroup.value;
            this.service.saveColony(colony)
                .subscribe(response => this.snackBarNotifierService.showNotification(':: Successfully saved!!!', 'Dismiss', 'success'), error => {

                    const validationErrors = error.error.errors as ValidationErrors;
                    this.snackBarNotifierService.showNotification(':: Duplicate entry found!!!', 'Dismiss', 'error');

                    Object.keys(validationErrors).forEach(prop => {
                        const formControl = this.formGroup.get(prop);
                        if (formControl) {
                            formControl.setErrors({
                                serverError: validationErrors[prop].errors.map((a: { errorMessage: any; }) => a.errorMessage).errors.map((a: { errorMessage: any; }) => a.errorMessage)
                            });
                        }
                    });
                    this.snackBarNotifierService.showNotification(':: Duplicate entry found!!!', 'Dismiss', 'error');
                }, () => {

                    this.colonyId = '';


                    this.loadGridView();
                    this.getColony(this.colonyId);
                    this.rebuildForm(formDirective);
                });
        } else {
            this.snackBarNotifierService.showNotification(':: This form has an invalid data, please check the fields and re-enter valid data!!!', 'Dismiss', 'error');
        }
        //this.router.navigate(['/books', this.bookId]);
    }

    update(formDirective?: FormGroupDirective) {
        if (this.formGroup.valid) {

            const changes = this.formGroup.value;
            this.service.updateColony(changes).subscribe(response => this.snackBarNotifierService.showNotification(':: Successfully updated!!!', 'Dismiss', 'success'), error => {
                //console.log(error);
                const validationErrors = error.error.errors as ValidationErrors;
                this.snackBarNotifierService.showNotification(':: Duplicate entry found!!!', 'Dismiss', 'error');

                Object.keys(validationErrors).forEach(prop => {
                    const formControl = this.formGroup.get(prop);
                    if (formControl) {
                        formControl.setErrors({
                            serverError: validationErrors[prop].errors.map((a: { errorMessage: any; }) => a.errorMessage).errors.map((a: { errorMessage: any; }) => a.errorMessage)
                        });
                    }
                });
            }, () => {
                this.colonyId = '';


                let btnSave = document.querySelector('#save');
                btnSave?.setAttribute('style', 'margin-right:10px;display:inline;');

                let btnUpdate = document.querySelector('#update');
                btnUpdate?.setAttribute('style', 'margin-right:10px;display:none;');

                let btnCancel = document.querySelector('#cancel');
                btnCancel?.setAttribute('style', 'margin-right:10px;display:none;');

                this.loadGridView();
                this.getColony(this.colonyId);
                this.rebuildForm(formDirective);
            });
        } else {
            this.snackBarNotifierService.showNotification(':: This form has an invalid data, please check the fields and re-enter valid data!!!', 'Dismiss', 'error');
        }
        //this.router.navigate(['/books', this.bookId]);
    }

    cancel(formDirective?: FormGroupDirective) {

        this.colonyId = '';


        let btnSave = document.querySelector('#save');
        btnSave?.setAttribute('style', 'margin-right:10px;display:inline;');

        let btnUpdate = document.querySelector('#update');
        btnUpdate?.setAttribute('style', 'margin-right:10px;display:none;');

        let btnCancel = document.querySelector('#cancel');
        btnCancel?.setAttribute('style', 'margin-right:10px;display:none;');

        this.getColony(this.colonyId);
        this.rebuildForm(formDirective);
        this.formGroup.updateValueAndValidity({onlySelf: true, emitEvent: true});
    }

    edit(row: { colonyId: string, countryId: string, stateId: string, cityId: string, districtId: string }) {

        this.colonyId = row.colonyId;

        let btnSave = document.querySelector('#save');
        btnSave?.setAttribute('style', 'margin-right:10px;display:none;');

        let btnUpdate = document.querySelector('#update');
        btnUpdate?.setAttribute('style', 'margin-right:10px;display:inline;');

        let btnCancel = document.querySelector('#cancel');
        btnCancel?.setAttribute('style', 'margin-right:10px;display:inline;');

        this.getStateDropDown(row.countryId);
        this.getCityDropDown(row.stateId);
        this.getDistrictDropDown(row.cityId);
        this.getAreaDropDown(row.districtId);
        this.getColony(row.colonyId);
        this.rebuildForm();
    }

    delete(row: any) {
        const id = row.colonyId;
        const dialogRef = this.openDialog(row.colonyName);
        dialogRef.afterClosed().subscribe((confirmed: boolean) => {
            if (confirmed) {

                this.service.deleteColony(id)
                    .subscribe(response => this.snackBarNotifierService.showNotification(':: Successfully deleted!!!', 'Dismiss', 'success'), error => this.snackBarNotifierService.showNotification(':: Duplicate entry found!!!', 'Dismiss', 'error'), () => {

                        this.colonyId = '';

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
        if (this.colony$ == null) {
            this.getColony(this.colonyId);
        }
        return this.colony$
            .pipe(finalize(() => {
                this.formGroup = this.fb.group({
                    colonyName: new FormControl(this.colony.colonyName, [Validators.required, Validators.minLength(3), Validators.maxLength(45)])
                    ,
                    colonyShortName: new FormControl(this.colony.colonyShortName, [Validators.required, Validators.minLength(2), Validators.maxLength(15)])
                    ,
                    areaId: new FormControl(this.colony.areaId, [Validators.required])
                    ,
                    colonyId: new FormControl(this.colony.colonyId)
                    ,
                    districtId: new FormControl(this.colony.districtId, [Validators.required])
                    ,
                    cityId: new FormControl(this.colony.cityId, [Validators.required])
                    ,
                    stateId: new FormControl(this.colony.stateId, [Validators.required])
                    ,
                    countryId: new FormControl(this.colony.countryId, [Validators.required])
                    ,
                    isActive: new FormControl(this.colony.isActive ?? true)
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
            .subscribe(colony => {
                //console.log(colony);
                this.colony = colony;
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
import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CountryService} from './country.service';
import {Country} from './country-pagination.model';
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {Observable, Subscription} from "rxjs";
import {finalize, map, startWith} from "rxjs/operators";
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, ValidationErrors, Validators} from "@angular/forms";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {DialogPosition, MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {SnackBarNotifierService} from "../../shared/components/snack-bar/snack-bar-notifier.service";
import {
    ConfirmationDialogBoxComponent
} from "../../shared/components/confirmation-dialog-box/confirmation-dialog-box.component";
import {CustomColumnSchema} from "../../shared/model/response.model";

@Component({
    selector: 'app-country',
    templateUrl: './country.component.html',
    styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit, AfterViewInit {

    columns: any;

    country = new Country();
    country$!: Observable<Country>;
    countries$!: Observable<Country[]>;
    countryId = '';
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
    dataSource!: MatTableDataSource<Country>;
    clickedRows = new Set<Country>();
    searchControl: FormControl;
    filteredSearches: Observable<string[]>;
    filterDictionary = new Map<string, string>();
    selected = ['Country Name'];
    allFilters = ['Country Name', 'Country Short Name', 'Country Code', 'Is Active'];
    color = 'accent';
    errors = [];
    formErrors = {
        countryName: '',
        countryShortName: '',
        countryCode: '',
        isActive: [false]
    };
    validationMessages = {
        countryName: {
            required: 'This is required.',
            minlength: 'Minimum 1 characters needed.',
            maxlength: 'Maximum 45 characters allowed.'
        },
        countryShortName: {
            required: 'This is required.',
            minlength: 'Minimum 2 characters needed.',
            maxlength: 'Maximum 15 characters allowed.'
        },
        countryCode: {
            required: 'This is required.',
            minlength: 'Minimum 1 characters needed.',
            maxlength: 'Maximum 7 characters allowed.'
        }
    };
    dbColumns = [
        'countryId',
        'countryName',
        'countryShortName',
        'countryCode',
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
            dataColumnName: 'countryId',
            headerColumnName: 'Country ID',
            isActive: true,
            isMandatory: false,
            isHidden: true
        },
        {
            position: 1,
            dataColumnName: 'countryName',
            headerColumnName: 'Country Name',
            isActive: true,
            isMandatory: true,
            isHidden: false
        },
        {
            position: 2,
            dataColumnName: 'countryShortName',
            headerColumnName: 'Country Short Name',
            isActive: true,
            isMandatory: true,
            isHidden: false
        },
        {
            position: 3,
            dataColumnName: 'countryCode',
            headerColumnName: 'Country Code',
            isActive: true,
            isMandatory: true,
            isHidden: false
        },
        {
            position: 4,
            dataColumnName: 'isActive',
            headerColumnName: 'Active Status',
            isActive: true,
            isMandatory: false,
            isHidden: false
        },
        {
            position: 5,
            dataColumnName: 'edit',
            headerColumnName: 'Edit',
            isActive: true,
            isMandatory: false,
            isHidden: true
        },
        {
            position: 6,
            dataColumnName: 'delete',
            headerColumnName: 'Delete',
            isActive: true,
            isMandatory: false,
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
        private service: CountryService,
        private snackBarNotifierService: SnackBarNotifierService,
        private dialog: MatDialog,
    ) {/*
        this.filterSelectObj = [
            {
                name: 'Country Id',
                columnProp: 'countryId',
                options: []
            }, {
                name: 'Country Name',
                columnProp: 'countryName',
                options: []
            }, {
                name: 'Country Short Name',
                columnProp: 'countryShortName',
                options: []
            }, {
                name: 'Country Code',
                columnProp: 'countryCode',
                options: []
            }, {
                name: 'Status',
                columnProp: 'isActive',
                options: []
            }
        ];*/
        this.searchControl = new FormControl();
        //this.searchControl.reset();
        /*this.searchControl.markAsPristine();
        this.searchControl.markAsUntouched();*/
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

        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    /*
    
        createFilter() {
            return function (data: any, filter: string): boolean {
                let searchTerms = JSON.parse(filter);
                let isFilterSet = false;
                for (const col in searchTerms) {
                    if (searchTerms[col].toString() !== '') {
                        isFilterSet = true;
                    } else {
                        delete searchTerms[col];
                    }
                }
    
                console.log(searchTerms);
    
                let nameSearch = () => {
                    let found = false;
                    if (isFilterSet) {
                        for (const col in searchTerms) {
                            searchTerms[col].trim().toLowerCase().split(' ').forEach(word => {
                                if (data[col].toString().toLowerCase().indexOf(word) != -1 && isFilterSet) {
                                    found = true
                                }
                            });
                        }
                        return found
                    } else {
                        return true;
                    }
                };
                return nameSearch()
            }
        }
    */

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

    getCountry(countryId: string) {
        return this.country$ = this.service.getCountry(countryId);
    }

    loadGridView() {

        // @ts-ignore
        const countries$ = this.service.getCountries(this.currentPage, this.pageSize)
            .pipe(
                map(project => project),
            );
        // @ts-ignore
        this.countries$ = countries$.pipe(map(project => project?.items));

        return countries$.subscribe(project => {
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

            if (value != 'countryId')
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

    save(fd?: FormGroupDirective) {
        if (this.formGroup.valid) {

            const country = this.formGroup.value;
            this.service.saveCountry(country)
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
                    this.countryId = '';

                    this.loadGridView();
                    this.getCountry(this.countryId);
                    this.rebuildForm(fd);
                });
        } else {
            this.snackBarNotifierService.showNotification(':: This form has an invalid data, please check the fields and re-enter valid data!!!', 'Dismiss', 'error');
        }
    }

    update(fd?: FormGroupDirective) {
        if (this.formGroup.valid) {

            const changes = this.formGroup.value;
            this.service.updateCountry(changes).subscribe(response => this.snackBarNotifierService.showNotification(':: Successfully updated!!!', 'Dismiss', 'success'), error => {
                console.log(error);
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
                this.countryId = '';


                let btnSave = document.querySelector('#save');
                btnSave?.setAttribute('style', 'margin-right:10px;display:inline;');

                let btnUpdate = document.querySelector('#update');
                btnUpdate?.setAttribute('style', 'margin-right:10px;display:none;');

                let btnCancel = document.querySelector('#cancel');
                btnCancel?.setAttribute('style', 'margin-right:10px;display:none;');

                this.loadGridView();
                this.getCountry(this.countryId);
                this.rebuildForm(fd);
            });
        } else {
            this.snackBarNotifierService.showNotification(':: This form has an invalid data, please check the fields and re-enter valid data!!!', 'Dismiss', 'error');
        }
        //this.router.navigate(['/books', this.bookId]);
    }

    cancel(fd?: FormGroupDirective) {

        this.countryId = '';


        let btnSave = document.querySelector('#save');
        btnSave?.setAttribute('style', 'margin-right:10px;display:inline;');

        let btnUpdate = document.querySelector('#update');
        btnUpdate?.setAttribute('style', 'margin-right:10px;display:none;');

        let btnCancel = document.querySelector('#cancel');
        btnCancel?.setAttribute('style', 'margin-right:10px;display:none;');

        this.getCountry(this.countryId);
        this.rebuildForm(fd);
        //this.formGroup.updateValueAndValidity({onlySelf: true, emitEvent: true});
    }

    edit(row: { countryId: string; }) {

        this.countryId = row.countryId;

        let btnSave = document.querySelector('#save');
        btnSave?.setAttribute('style', 'margin-right:10px;display:none;');

        let btnUpdate = document.querySelector('#update');
        btnUpdate?.setAttribute('style', 'margin-right:10px;display:inline;');

        let btnCancel = document.querySelector('#cancel');
        btnCancel?.setAttribute('style', 'margin-right:10px;display:inline;');

        this.getCountry(row.countryId);
        this.rebuildForm();
    }

    delete(row: any) {
        const id = row.countryId;
        const dialogRef = this.openDialog(row.countryName);
        dialogRef.afterClosed().subscribe((confirmed: boolean) => {
            if (confirmed) {

                this.service.deleteCountry(id)
                    .subscribe(response => this.snackBarNotifierService.showNotification(':: Successfully deleted!!!', 'Dismiss', 'success'), error => this.snackBarNotifierService.showNotification(`:: ${error.error}!!!`, 'Dismiss', 'error'), () => {

                        this.countryId = '';

                        this.loadGridView();
                        this.rebuildForm();
                    });
                // @ts-ignore
                this.snackbar.dismiss();

                //this.snackBarNotifierService.showNotification(':: Closing snack bar in a few seconds!!!', 'Dismiss', 'info');
            }
        });
    }

    rebuildForm(fd?: FormGroupDirective) {
        if (this.formGroup) {
            this.formGroup.reset();
            fd?.resetForm();
        }
        if (this.country$ == null) {
            this.getCountry(this.countryId);
        }
        return this.country$
            .pipe(finalize(() => {
                this.formGroup = this.fb.group({
                    countryName: new FormControl(this.country.countryName, [Validators.required, Validators.minLength(3), Validators.maxLength(45)])
                    ,
                    countryShortName: new FormControl(this.country.countryShortName, [Validators.required, Validators.minLength(2), Validators.maxLength(15)])
                    ,
                    countryCode: new FormControl(this.country.countryCode, [Validators.required, Validators.minLength(1), Validators.maxLength(7)])
                    ,
                    countryId: new FormControl(this.country.countryId)
                    ,
                    isActive: new FormControl(this.country.isActive ?? true)
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
            .subscribe(payLoad => {
                //console.log(country);
                this.country = payLoad;
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
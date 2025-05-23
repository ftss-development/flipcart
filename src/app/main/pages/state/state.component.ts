import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, ValidationErrors, Validators} from "@angular/forms";
import {Observable, Subscription} from "rxjs";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {StateService} from "./state.service";
import {State} from './state-pagination.model';
import {DialogPosition, MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {SnackBarNotifierService} from "../../shared/components/snack-bar/snack-bar-notifier.service";
import {finalize, map, startWith} from "rxjs/operators";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {
    ConfirmationDialogBoxComponent
} from "../../shared/components/confirmation-dialog-box/confirmation-dialog-box.component";
import {Country} from "../country/country-pagination.model";
import {CustomColumnSchema} from "../../shared/model/response.model";

@Component({
    selector: 'app-state',
    templateUrl: './state.component.html',
    styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit, AfterViewInit {

    columns: any;

    state = new State();
    state$!: Observable<State>;
    states$!: Observable<State[]>;
    countries$!: Observable<Country[]>;
    stateId = '';
    subscription: Subscription[] = [];
    position: DialogPosition = {top: '0', left: '0'};
    formGroup!: FormGroup;
    filterControl:FormControl = new FormControl([]);
    filterMatChipListControl = new FormControl([]);
    filteredColumns: CustomColumnSchema[] = [];
    filterValues = {};
    filterSelectObj = [];
    isLoading = false;
    totalRows: number | null | undefined = 0;
    pageSize = 5;
    currentPage = 0;
    pageSizeOptions = [5, 10, 25, 100];
    dataSource!: MatTableDataSource<State>;
    clickedRows = new Set<State>();
    searchControl: FormControl;
    filteredSearches: Observable<string[]>;
    filterDictionary = new Map<string, string>();
    selected = ['State Name'];
    allFilters = ['State Name', 'State Short Name', 'State Code', 'Is Active'];
    color = 'accent';
    errors = [];
    formErrors = {
        stateName: '',
        stateShortName: '',
        stateGstCode: '',
        countryId: '',
        isActive: [false]
    };
    validationMessages = {
        stateName: {
            required: 'This is required.',
            minlength: 'Minimum 1 characters needed.',
            maxlength: 'Maximum 45 characters allowed.'
        },
        stateShortName: {
            required: 'This is required.',
            minlength: 'Minimum 2 characters needed.',
            maxlength: 'Maximum 15 characters allowed.'
        },
        stateGstCode: {
            required: 'This is required.',
            minlength: 'Minimum 1 characters needed.',
            maxlength: 'Maximum 7 characters allowed.'
        },
        countryId: {
            required: 'This is required.'
        }
    };
    dbColumns = [
        'stateId',
        'stateName',
        'stateShortName',
        'stateGstCode',
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
            dataColumnName: 'stateId',
            headerColumnName: 'State Id',
            isActive: true,
            isMandatory: false,
            isHidden: true
        },
        {
            position: 1,
            dataColumnName: 'stateName',
            headerColumnName: 'State Name',
            isActive: true,
            isMandatory: true,
            isHidden: false
        },
        {
            position: 2,
            dataColumnName: 'stateShortName',
            headerColumnName: 'State Short Name',
            isActive: true,
            isMandatory: true,
            isHidden: false
        },
        {
            position: 3,
            dataColumnName: 'stateGstCode',
            headerColumnName: 'State Code',
            isActive: true,
            isMandatory: true,
            isHidden: false
        },
        {
            position: 4,
            dataColumnName: 'countryId',
            headerColumnName: 'Country Id',
            isActive: true,
            isMandatory: false,
            isHidden: true
        },
        {
            position: 5,
            dataColumnName: 'country',
            headerColumnName: 'Country',
            isActive: true,
            isMandatory: false,
            isHidden: false
        },
        {
            position: 6,
            dataColumnName: 'isActive',
            headerColumnName: 'Status',
            isActive: true,
            isMandatory: false,
            isHidden: false
        },
        {
            position: 7,
            dataColumnName: 'edit',
            headerColumnName: 'Edit',
            isActive: true,
            isMandatory: false,
            isHidden: true
        },
        {
            position: 8,
            dataColumnName: 'delete',
            headerColumnName: 'Delete',
            isActive: true,
            isMandatory: false,
            isHidden: true
        }
    ];
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
    @ViewChild('auto') auto!: ElementRef<HTMLInputElement>;
    @ViewChild('input') input!: ElementRef;
    private snackbar = null;

    constructor(
        private fb: FormBuilder,
        private service: StateService,
        private snackBarNotifierService: SnackBarNotifierService,
        private dialog: MatDialog,
    ) {
        /*this.filterSelectObj = [
            {
                name: 'State Id',
                columnProp: 'stateId',
                options: []
            }, {
                name: 'State Name',
                columnProp: 'stateName',
                options: []
            }, {
                name: 'State Short Name',
                columnProp: 'stateShortName',
                options: []
            }, {
                name: 'State GST Code',
                columnProp: 'stateGstCode',
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

    getState(stateId: string) {
        return this.state$ = this.service.getState(stateId);
    }

    loadGridView() {

        const states$ = this.service.getStates(this.currentPage, this.pageSize)
            .pipe(
                map(project => project),
            );
        // @ts-ignore
        this.states$ = states$.pipe(map(project => project.items));

        return states$.subscribe(project => {
            this.totalRows = project.totalCount;
            //this.paginator.pageIndex = this.currentPage;
            //this.paginator.length = countries.items.length;            
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

            if (value != 'stateId')
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

            const state = this.formGroup.value;
            this.service.saveState(state)
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

                    this.stateId = '';
                    this.loadGridView();
                    this.getState(this.stateId);
                    this.rebuildForm(formDirective);
                });
        }
        //this.router.navigate(['/books', this.bookId]);
    }

    update(formDirective?: FormGroupDirective) {
        if (this.formGroup.valid) {

            const changes = this.formGroup.value;
            this.service.updateState(changes).subscribe(response => this.snackBarNotifierService.showNotification(':: Successfully updated!!!', 'Dismiss', 'success'), error => {
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
                this.stateId = '';

                let btnSave = document.querySelector('#save');
                btnSave?.setAttribute('style', 'margin-right:10px;display:inline;');

                let btnUpdate = document.querySelector('#update');
                btnUpdate?.setAttribute('style', 'margin-right:10px;display:none;');

                let btnCancel = document.querySelector('#cancel');
                btnCancel?.setAttribute('style', 'margin-right:10px;display:none;');

                this.loadGridView();
                this.getState(this.stateId);
                this.rebuildForm(formDirective);
            });
        } else {
            this.snackBarNotifierService.showNotification(':: This form has an invalid data, please check the fields and re-enter valid data!!!', 'Dismiss', 'error');
        }
        //this.router.navigate(['/books', this.bookId]);
    }

    cancel(formDirective?: FormGroupDirective) {

        this.stateId = '';

        let btnSave = document.querySelector('#save');
        btnSave?.setAttribute('style', 'margin-right:10px;display:inline;');

        let btnUpdate = document.querySelector('#update');
        btnUpdate?.setAttribute('style', 'margin-right:10px;display:none;');

        let btnCancel = document.querySelector('#cancel');
        btnCancel?.setAttribute('style', 'margin-right:10px;display:none;');

        this.getState(this.stateId);
        this.rebuildForm(formDirective);
        this.formGroup.updateValueAndValidity({onlySelf: true, emitEvent: true});
    }

    edit(row: { stateId: string; }) {

        this.stateId = row.stateId;

        let btnSave = document.querySelector('#save');
        btnSave?.setAttribute('style', 'margin-right:10px;display:none;');

        let btnUpdate = document.querySelector('#update');
        btnUpdate?.setAttribute('style', 'margin-right:10px;display:inline;');

        let btnCancel = document.querySelector('#cancel');
        btnCancel?.setAttribute('style', 'margin-right:10px;display:inline;');

        this.getState(row.stateId);
        this.rebuildForm();
    }

    delete(row: any) {
        const id = row.stateId;
        const dialogRef = this.openDialog(row.stateName);
        dialogRef.afterClosed().subscribe((confirmed: boolean) => {
            if (confirmed) {

                this.service.deleteState(id)
                    .subscribe(response => this.snackBarNotifierService.showNotification(':: Successfully deleted!!!', 'Dismiss', 'success'), error => this.snackBarNotifierService.showNotification(':: Duplicate entry found!!!', 'Dismiss', 'error'), () => {

                        this.stateId = '';
                        this.loadGridView();
                        this.getState(row.stateId);
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
        if (this.state$ == null) {
            this.getState(this.stateId);
        }
        return this.state$
            .pipe(finalize(() => {
                this.formGroup = this.fb.group({
                    stateName: new FormControl(this.state.stateName, [Validators.required, Validators.minLength(3), Validators.maxLength(45)])
                    ,
                    stateShortName: new FormControl(this.state.stateShortName, [Validators.required, Validators.minLength(2), Validators.maxLength(15)])
                    ,
                    stateGstCode: new FormControl(this.state.stateGstCode, [Validators.required, Validators.minLength(1), Validators.maxLength(7)])
                    ,
                    stateId: new FormControl(this.state.stateId)
                    ,
                    countryId: new FormControl(this.state.countryId, [Validators.required])
                    ,
                    isActive: new FormControl(this.state.isActive ?? true)
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
            .subscribe(state => {
                //console.log(state);
                this.state = state;
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

import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {map, shareReplay} from "rxjs/operators";
import {Country} from "../country/country-pagination.model";
import {State} from "../state/state-pagination.model";
import {City} from "../city/city.pagination.model";
import {Colony} from "./colony.pagination.model";
import {District} from "../district/district.pagination.model";
import {Area} from "../area/area.pagination.model";
import {environment} from "../../../environments/environment.prod";
import {Pagination, Response} from "../../shared/model/response.model";

@Injectable({
    providedIn: 'root'
})
export class ColonyService {

    baseUrl = environment.apiServerUrl;

    constructor(private http: HttpClient) {
    }

    getColony(id: any) {

        return this.http.get<Response<Colony>>(`${this.baseUrl}Colonies/${id}`)
            .pipe(
                map(project =>
                    project.payLoad as Colony
                ),
                shareReplay()
            );
    }

    getColonies(currentPage?: any, pageSize?: any) {
        let queryParams = new HttpParams();

        if (currentPage) {
            queryParams = queryParams.append('pageNumber', currentPage);
        }
        if (pageSize) {
            queryParams = queryParams.append('pageSize', pageSize);
        }

        return this.http.get<Response<Colony>>(`${this.baseUrl}Colonies`, {params: queryParams})
            .pipe(
                map(project =>
                    (project.payLoad as Pagination<Colony>)
                ),
                shareReplay()
            );
    }

    getCountryDropDown(currentPage?: any, pageSize?: any) {
        let queryParams = new HttpParams();

        if (currentPage) {
            queryParams = queryParams.append('pageNumber', currentPage);
        }
        if (pageSize) {
            queryParams = queryParams.append('pageSize', pageSize);
        }

        return this.http.get<Response<Country>>(`${this.baseUrl}Countries/EntityForDataBinding`, {params: queryParams})
            .pipe(
                map(project => (project.payLoad as Pagination<Country>).items),
                shareReplay()
            );
    }

    getStateDropDown(id?: any, currentPage?: any, pageSize?: any) {
        let queryParams = new HttpParams();

        if (currentPage) {
            queryParams = queryParams.append('pageNumber', currentPage);
        }
        if (pageSize) {
            queryParams = queryParams.append('pageSize', pageSize);
        }
        if (id) {
            queryParams = queryParams.append('countryId', id);
        }

        return this.http.get<Response<State>>(`${this.baseUrl}States/EntityForDataBinding`, {params: queryParams})
            .pipe(
                map(project => (project.payLoad as Pagination<State>).items),
                shareReplay()
            );
    }

    getCityDropDown(id?: any, currentPage?: any, pageSize?: any) {
        let queryParams = new HttpParams();

        if (currentPage) {
            queryParams = queryParams.append('pageNumber', currentPage);
        }
        if (pageSize) {
            queryParams = queryParams.append('pageSize', pageSize);
        }
        if (id) {
            queryParams = queryParams.append('stateId', id);
        }

        return this.http.get<Response<City>>(`${this.baseUrl}Cities/EntityForDataBinding`, {params: queryParams})
            .pipe(
                map(project => (project.payLoad as Pagination<City>).items),
                shareReplay()
            );
    }

    getDistrictDropDown(id?: any, currentPage?: any, pageSize?: any) {
        let queryParams = new HttpParams();

        if (currentPage) {
            queryParams = queryParams.append('pageNumber', currentPage);
        }
        if (pageSize) {
            queryParams = queryParams.append('pageSize', pageSize);
        }
        if (id) {
            queryParams = queryParams.append('cityId', id);
        }

        return this.http.get<Response<District>>(`${this.baseUrl}Districts/EntityForDataBinding`, {params: queryParams})
            .pipe(
                map(project => (project.payLoad as Pagination<District>).items),
                shareReplay()
            );
    }

    getAreaDropDown(id?: any, currentPage?: any, pageSize?: any) {
        let queryParams = new HttpParams();

        if (currentPage) {
            queryParams = queryParams.append('pageNumber', currentPage);
        }
        if (pageSize) {
            queryParams = queryParams.append('pageSize', pageSize);
        }
        if (id) {
            queryParams = queryParams.append('districtId', id);
        }

        return this.http.get<Response<Area>>(`${this.baseUrl}Areas/EntityForDataBinding`, {params: queryParams})
            .pipe(
                map(project => (project.payLoad as Pagination<Area>).items),
                shareReplay()
            );
    }

    saveColony(colony: Partial<Colony>) {
        return this.http.post<Response<Colony>>(`${this.baseUrl}Colonies`, colony)
            .pipe(map(project =>
                (project.payLoad as Colony)
            ), shareReplay());
    }

    updateColony(changes: Partial<Colony>) {
        return this.http.put<Response<Colony>>(`${this.baseUrl}Colonies?colonyId=${changes.colonyId}`, changes)
            .pipe(shareReplay());
    }

    deleteColony(id: any) {
        return this.http.delete<Response<Colony>>(`${this.baseUrl}Colonies?colonyId=${id}`)
            .pipe(shareReplay());
    }
}

import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {map, shareReplay} from "rxjs/operators";
import {Country} from "../country/country-pagination.model";
import {State} from "../state/state-pagination.model";
import {City} from "../city/city.pagination.model";
import {District} from "../district/district.pagination.model";
import {environment} from "../../../environments/environment.prod";
import {Pagination, Response} from "../../shared/model/response.model";
import {Area} from "./area.pagination.model";

@Injectable({
    providedIn: 'root'
})
export class AreaService {

    baseUrl = environment.apiServerUrl;

    constructor(private http: HttpClient) {
    }

    getArea(id: any) {

        return this.http.get<Response<Area>>(`${this.baseUrl}Areas/${id}`)
            .pipe(
                map(project =>
                    project.payLoad as Area
                ),
                shareReplay()
            );
    }

    getAreas(currentPage?: any, pageSize?: any) {
        let queryParams = new HttpParams();

        if (currentPage) {
            queryParams = queryParams.append('pageNumber', currentPage);
        }
        if (pageSize) {
            queryParams = queryParams.append('pageSize', pageSize);
        }

        return this.http.get<Response<Area>>(`${this.baseUrl}Areas`, {params: queryParams})
            .pipe(
                map(project =>
                    (project.payLoad as Pagination<Area>)
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

    saveArea(area: Partial<Area>) {
        return this.http.post<Response<Area>>(`${this.baseUrl}Areas`, area)
            .pipe(map(project =>
                (project.payLoad as Area)
            ), shareReplay());
    }

    updateArea(changes: Partial<Area>) {
        return this.http.put<Response<Area>>(`${this.baseUrl}Areas?areaId=${changes.areaId}`, changes)
            .pipe(shareReplay());
    }

    deleteArea(id: any) {
        return this.http.delete<Response<Area>>(`${this.baseUrl}Areas?areaId=${id}`)
            .pipe(shareReplay());
    }
}

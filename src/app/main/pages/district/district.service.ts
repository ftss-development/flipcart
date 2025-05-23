import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {map, shareReplay} from "rxjs/operators";
import {Country} from "../country/country-pagination.model";
import {State} from "../state/state-pagination.model";
import {District} from "./district.pagination.model";
import {City} from "../city/city.pagination.model";
import {Pagination, Response} from "../../shared/model/response.model";
import {environment} from "../../../environments/environment.prod";

@Injectable({
    providedIn: 'root'
})
export class DistrictService {

    baseUrl = environment.apiServerUrl;

    constructor(private http: HttpClient) {
    }

    getDistrict(id: any) {

        return this.http.get<Response<District>>(`${this.baseUrl}Districts/${id}`)
            .pipe(
                map(project =>
                    project.payLoad as District
                ),
                shareReplay()
            );
    }

    getDistricts(currentPage?: any, pageSize?: any) {
        let queryParams = new HttpParams();

        if (currentPage) {
            queryParams = queryParams.append('pageNumber', currentPage);
        }
        if (pageSize) {
            queryParams = queryParams.append('pageSize', pageSize);
        }

        return this.http.get<Response<District>>(`${this.baseUrl}Districts`, {params: queryParams})
            .pipe(
                map(project =>
                    (project.payLoad as Pagination<District>)
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

    saveDistrict(district: Partial<District>) {
        return this.http.post<Response<District>>(`${this.baseUrl}Districts`, district)
            .pipe(map(project =>
                (project.payLoad as District)
            ), shareReplay());
    }

    updateDistrict(changes: Partial<District>) {
        return this.http.put<Response<District>>(`${this.baseUrl}Districts?districtId=${changes.districtId}`, changes)
            .pipe(shareReplay());
    }

    deleteDistrict(id: any) {
        return this.http.delete<Response<District>>(`${this.baseUrl}Districts?districtId=${id}`)
            .pipe(shareReplay());
    }
}

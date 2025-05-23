import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {map, shareReplay} from "rxjs/operators";
import {Country} from "../country/country-pagination.model";
import {City} from "./city.pagination.model";
import {State} from "../state/state-pagination.model";
import {environment} from "../../../environments/environment.prod";
import {Pagination, Response} from "../../shared/model/response.model";

@Injectable({
    providedIn: 'root'
})
export class CityService {

    baseUrl = environment.apiServerUrl;

    constructor(private http: HttpClient) {
    }

    getCity(id: any) {

        return this.http.get<Response<City>>(`${this.baseUrl}Cities/${id}`)
            .pipe(
                map(project =>
                    project.payLoad as City
                ),
                shareReplay()
            );
    }

    getCities(currentPage?: any, pageSize?: any) {
        let queryParams = new HttpParams();

        if (currentPage) {
            queryParams = queryParams.append('pageNumber', currentPage);
        }
        if (pageSize) {
            queryParams = queryParams.append('pageSize', pageSize);
        }

        return this.http.get<Response<City>>(`${this.baseUrl}Cities`, {params: queryParams})
            .pipe(
                map(project =>
                    (project.payLoad as Pagination<City>)
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

    saveCity(city: Partial<City>) {
        return this.http.post<Response<City>>(`${this.baseUrl}Cities`, city)
            .pipe(map(project =>
                (project.payLoad as City)
            ), shareReplay());
    }

    updateCity(changes: Partial<City>) {
        return this.http.put<Response<City>>(`${this.baseUrl}Cities?cityId=${changes.cityId}`, changes)
            .pipe(shareReplay());
    }

    deleteCity(id: any) {
        return this.http.delete<Response<City>>(`${this.baseUrl}Cities?cityId=${id}`)
            .pipe(shareReplay());
    }
}

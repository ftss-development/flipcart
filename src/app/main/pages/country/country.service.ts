import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {map, shareReplay} from 'rxjs/operators';
import {Country} from './country-pagination.model';
import {environment} from "../../../environments/environment.prod";
import {Pagination, Response} from "../../shared/model/response.model";

@Injectable({
    providedIn: 'root'
})
export class CountryService {

    baseUrl = environment.apiServerUrl;

    constructor(private http: HttpClient) {
    }

    getCountry(id: any) {

        return this.http.get<Response<Country>>(`${this.baseUrl}Countries/${id}`)
            .pipe(
                map(project =>
                    project.payLoad as Country
                ),
                shareReplay()
            );
    }

    getCountries(currentPage?: any, pageSize?: any) {
        var retVal = null;
        let queryParams = new HttpParams();
        if (currentPage) {
            queryParams = queryParams.append('pageNumber', currentPage);
        }
        if (pageSize) {
            queryParams = queryParams.append('pageSize', pageSize);
        }
        try {
            retVal = this.http.get<Response<Country>>(`${this.baseUrl}Countries`, {params: queryParams})
                .pipe(
                    map(project => {
                            console.log('Countries:', project.payLoad as Pagination<Country>);
                            return project.payLoad as Pagination<Country>;
                        }
                    ),
                    shareReplay()
                );

        } catch (e) {
            console.log('error:', e);
        } finally {
            return retVal;
        }
    }

    saveCountry(country: Partial<Country>) {
        return this.http.post<Response<Country>>(`${this.baseUrl}Countries`, country)
            .pipe(map(project =>
                (project.payLoad as Country)
            ), shareReplay());
    }

    updateCountry(changes: Partial<Country>) {
        return this.http.put<Response<Country>>(`${this.baseUrl}Countries?countryId=${changes.countryId}`, changes)
            .pipe(shareReplay());
    }

    deleteCountry(id: any) {
        return this.http.delete<Response<Country>>(`${this.baseUrl}Countries?countryId=${id}`)
            .pipe(shareReplay());
    }
}

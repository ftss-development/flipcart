import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {State} from "./state-pagination.model";
import {map, shareReplay} from "rxjs/operators";
import {Country} from "../country/country-pagination.model";
import {environment} from "../../../environments/environment.prod";
import {Pagination, Response} from "../../shared/model/response.model";

@Injectable({
    providedIn: 'root'
})
export class StateService {

    baseUrl = environment.apiServerUrl;

    constructor(private http: HttpClient) {
    }

    getState(id: any) {

        return this.http.get<Response<State>>(`${this.baseUrl}States/${id}`)
            .pipe(
                map(project =>
                    project.payLoad as State
                ),
                shareReplay()
            );
    }

    getStates(currentPage?: any, pageSize?: any) {
        let queryParams = new HttpParams();

        if (currentPage) {
            queryParams = queryParams.append('pageNumber', currentPage);
        }
        if (pageSize) {
            queryParams = queryParams.append('pageSize', pageSize);
        }

        return this.http.get<Response<State>>(`${this.baseUrl}States`, {params: queryParams})
            .pipe(
                map(project =>
                    (project.payLoad as Pagination<State>)
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

    saveState(state: Partial<State>) {
        return this.http.post<Response<State>>(`${this.baseUrl}States`, state)
            .pipe(map(project =>
                (project.payLoad as State)
            ), shareReplay());
    }

    updateState(changes: Partial<State>) {
        return this.http.put<Response<State>>(`${this.baseUrl}States?stateId=${changes.stateId}`, changes)
            .pipe(shareReplay());
    }

    deleteState(id: any) {
        return this.http.delete<Response<State>>(`${this.baseUrl}States?stateId=${id}`)
            .pipe(shareReplay());
    }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { CustomExceptionHandler } from 'src/app/core/exception/custom-exception.handler';
import { MenuProperties } from '../shared/properties/menu.properties';

@Injectable({
    providedIn: 'root',
})
export class DashboardService {
    private baseUrl = MenuProperties.BASE_URL;
    private APIS_URL: string = this.baseUrl + 'apis/';
    private PENDING_REQUEST_URL: string = this.baseUrl + 'pending-request/';

    constructor(private http: HttpClient,
        private customExceptionHandler: CustomExceptionHandler) {
    }

    getApi(id: number) {
        return this.http.get<any>(this.APIS_URL + id)
            .pipe(
                retry(1),
                catchError(this.customExceptionHandler.handleError)
            );
    }

    getPendingRequests() {
        return this.http.get<any>(this.PENDING_REQUEST_URL)
            .pipe(
                retry(1),
                catchError(this.customExceptionHandler.handleError)
            );
    }
}
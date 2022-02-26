import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { CustomExceptionHandler } from 'src/app/core/exception/custom-exception.handler';
import { MenuProperties } from 'src/app/shared/properties/menu.properties';
import { Application } from './application.model';

@Injectable({
    providedIn: 'root',
})
export class AppManagerService {
    private baseUrl = MenuProperties.BASE_URL;
    private APP_MANAGER_URL: string = this.baseUrl + 'applications/';

    constructor(private http: HttpClient,
        private customExceptionHandler: CustomExceptionHandler) {
    }

    getAppList() {
        return this.http.get<any[]>(this.APP_MANAGER_URL)
            .pipe(
                retry(0),
                catchError(this.customExceptionHandler.handleError)
            );
    }

    getApp(appId: number) {
        return this.http.get<any>(this.APP_MANAGER_URL + appId)
            .pipe(
                retry(0),
                catchError(this.customExceptionHandler.handleError)
            );
    }

    save(application: Application) {
        return this.http.post<any>(this.APP_MANAGER_URL, JSON.stringify(application))
            .pipe(
                retry(0),
                catchError(this.customExceptionHandler.handleError)
            );
    }
}
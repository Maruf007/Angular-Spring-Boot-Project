import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { CustomExceptionHandler } from 'src/app/core/exception/custom-exception.handler';
import { MenuProperties } from 'src/app/shared/properties/menu.properties';
import { User } from 'src/app/core/model/user.model';

@Injectable({
    providedIn: 'root',
})
export class UserManagerService {
    private baseUrl = MenuProperties.BASE_URL;
    private USER_MANAGER_URL: string = this.baseUrl + 'users/';

    constructor(private http: HttpClient,
        private customExceptionHandler: CustomExceptionHandler) {
    }

    getUserList() {
        return this.http.get<any>(this.USER_MANAGER_URL)
            .pipe(
                retry(0),
                catchError(this.customExceptionHandler.handleError)
            );
    }

    update(user: User) {
        return this.http.put<any>(this.USER_MANAGER_URL, JSON.stringify(user))
            .pipe(
                retry(0),
                catchError(this.customExceptionHandler.handleError)
            );
    }
}
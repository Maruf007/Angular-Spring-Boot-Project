import { throwError  } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class CustomExceptionHandler {
    public handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            
          console.error('An error occurred:', error.error.message);
        } else {
            
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(error.error.messages.toString());
      };
}
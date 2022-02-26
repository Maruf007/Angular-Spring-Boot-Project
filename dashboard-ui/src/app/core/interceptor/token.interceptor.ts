import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, delay, finalize } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    
  constructor(
    // private userDataService: UserDataService
    ) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    // if (this.userDataService.hasToken()) {
    //   request = this.addToken(request, this.userDataService.getToken());
    // }

    return next.handle(request).pipe(catchError((error) => {
      if (error instanceof HttpErrorResponse && (error.status === 403)) {
        return this.handle401Error(request, next);
      } else {
        return throwError(error);
      }
    }));
  }

  private handle401Error(request, next) {
    // this.userDataService.getRefreshToken().subscribe((user: any) => {
    //   this.userDataService.setUser(user);
    //   }, error => {
    // });
    return throwError(request);
  }

  private addToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        'Authorization': `Bearer${token}`,
        'Content-Type': 'application/json' 
      }
    });
  }
    
}
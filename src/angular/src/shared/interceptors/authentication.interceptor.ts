import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
  private tokenKey = 'token';
  private refreshTokenKey = 'refresh_token';

  constructor(private router: Router) {
  }

  private get token(): string {
    return sessionStorage.getItem(this.tokenKey);
  }

  private set token(val: string) {
    sessionStorage.setItem(this.tokenKey, val);
  }

  private get refreshToken(): string {
    return sessionStorage.getItem(this.refreshTokenKey);
  }

  private set refreshToken(val: string) {
    sessionStorage.setItem(this.refreshTokenKey, val);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // let token = this.token;
    let changedRequest = req;
    // HttpHeader object immutable - copy values
    const headerSettings: { [name: string]: string | string[]; } = {};


    for (const key of req.headers.keys()) {
      headerSettings[key] = req.headers.getAll(key);
    }
    if (this.token) {
      headerSettings['Authorization'] = 'Bearer ' + this.token;
    }

    /*if (!headerSettings['Content-Type']) {
      headerSettings['Content-Type'] = 'application/json';
    }*/
    const newHeader = new HttpHeaders(headerSettings);

    changedRequest = req.clone({
      headers: newHeader
    });
    return next.handle(changedRequest).pipe(
      tap(res => {
        if (res instanceof HttpResponse) {
          const token = res.headers.get('token');
          if (token !== undefined && token !== null) {
            this.token = token;
          }
        }

      }),
      catchError((err, caught) => {
        if (err instanceof HttpErrorResponse && err.status === 401) {
          if (this.refreshToken === undefined) {
            this.router.navigate(['login']);
          }
        }
        return throwError(err);
      }));
  }
}

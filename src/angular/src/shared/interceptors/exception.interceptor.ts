import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, empty, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { NotificationService } from '@bci/ng-core';
import { Router } from '@angular/router';
import { catchError, onErrorResumeNext } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { ErrorObservable } from 'rxjs-compat/observable/ErrorObservable';
import { AuthService } from '../services';
import { ErrorTipComponent } from '../components';

@Injectable()
export class ExceptionInterceptor implements HttpInterceptor {
  constructor(private notificationService: NotificationService,
              private snackBar: MatSnackBar,
              private translate: TranslateService,
              private authService: AuthService,
              private router: Router) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err, caught) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 400 || err.status === 500) {
            if (req.url.indexOf('api/ProductionTemplate/GetPTProcessInfoList') < 0) {
              this.errorHandle(err.error);
            }
          } else if (err.status === 401) {
            this.authService.logout();
            this.translate.get('ApiError.401').subscribe(message => {
              this.snackBar.open(message, '',
                {
                  duration: 3000,
                  verticalPosition: 'top',
                  panelClass: 'snack-error'
                }).afterOpened().subscribe((val) => {
                  setTimeout(() => {
                    window.location.href = `${window.location.protocol}//${window.location.host}/login`;
                  }, 2000);
                }
              );
            });
          }
        }
        // console.error(err);
        return throwError(err);
      })/*,
      onErrorResumeNext(empty())// empty()*/
    );
  }

  errorHandle(error: Object);
  async errorHandle(error: Array<Object>) {
    if (!Array.isArray(error)) {
      this.translate.get(`ApiError.${error['Code']}`, error['Parameters']).subscribe(message => {
        this.snackBar.openFromComponent(ErrorTipComponent,
          {
            data: [message],
            duration: 3000,
            verticalPosition: 'top',
            panelClass: 'snack-error'
          });
      });
    } else if (Array.isArray(error)) {
      const message = [];
      await error.forEach(item => {
        this.translate.get(`ApiError.${item['Code']}`, item['Parameters']).subscribe(
          data => {
            message.push(data);
          }
        );
      });
      await this.snackBar.openFromComponent(ErrorTipComponent,
        {
          data: message,
          duration: 3000 * error.length,
          verticalPosition: 'top',
          panelClass: 'snack-error'
        });
    }
  }


}



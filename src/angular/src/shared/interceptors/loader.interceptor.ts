import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { BciLoaderService } from '@bci/ng-core';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private loaderService: BciLoaderService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const element = this.loaderService.showProgressBar();
    return next.handle(req).pipe(
      finalize(() => {
        this.loaderService.hideProgressBar(element);
      })
    );
  }
}

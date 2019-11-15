/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
var BciLoaderService = /** @class */ (function () {
    function BciLoaderService() {
        this.loaderSubject = new Subject();
        this.loaderState = /** @type {?} */ (this.loaderSubject.asObservable());
        this.loaderQueueElements = [];
    }
    /**
     * @return {?}
     */
    BciLoaderService.prototype.showProgressBar = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = {
            id: Date.now()
        };
        this.loaderQueueElements.push(element);
        this.loaderSubject.next(true);
        return element;
    };
    /**
     * @param {?} element
     * @return {?}
     */
    BciLoaderService.prototype.hideProgressBar = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        /** @type {?} */
        var index = this.loaderQueueElements.findIndex(function (el) { return element.id === el.id; });
        if (index > -1) {
            this.loaderQueueElements.splice(index, 1);
        }
        if (this.loaderQueueElements.length === 0) {
            this.loaderSubject.next(false);
        }
    };
    BciLoaderService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    BciLoaderService.ctorParameters = function () { return []; };
    /** @nocollapse */ BciLoaderService.ngInjectableDef = i0.defineInjectable({ factory: function BciLoaderService_Factory() { return new BciLoaderService(); }, token: BciLoaderService, providedIn: "root" });
    return BciLoaderService;
}());
export { BciLoaderService };
if (false) {
    /** @type {?} */
    BciLoaderService.prototype.loaderSubject;
    /** @type {?} */
    BciLoaderService.prototype.loaderState;
    /** @type {?} */
    BciLoaderService.prototype.loaderQueueElements;
}
var LoaderQueueElement = /** @class */ (function () {
    function LoaderQueueElement() {
    }
    return LoaderQueueElement;
}());
export { LoaderQueueElement };
if (false) {
    /** @type {?} */
    LoaderQueueElement.prototype.id;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmNpLWxvYWRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGJjaS9uZy1jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvcmUvbGF5b3V0L2JjaS1sb2FkZXIvYmNpLWxvYWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7OztJQVd6Qzs2QkFKd0IsSUFBSSxPQUFPLEVBQVc7NkNBQ0gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUU7bUNBQ25CLEVBQUU7S0FHMUQ7Ozs7SUFFRCwwQ0FBZTs7O0lBQWY7O1FBQ0UsSUFBTSxPQUFPLEdBQXVCO1lBQ2xDLEVBQUUsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFO1NBQ2YsQ0FBQztRQUNGLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUIsTUFBTSxDQUFDLE9BQU8sQ0FBQztLQUNoQjs7Ozs7SUFFRCwwQ0FBZTs7OztJQUFmLFVBQWdCLE9BQTJCOztRQUN6QyxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFwQixDQUFvQixDQUFDLENBQUM7UUFDN0UsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNmLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzNDO1FBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2hDO0tBQ0Y7O2dCQTdCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7OzsyQkFURDs7U0FVYSxnQkFBZ0I7Ozs7Ozs7OztBQThCN0IsSUFBQTs7OzZCQXhDQTtJQTBDQyxDQUFBO0FBRkQsOEJBRUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQmNpTG9hZGVyU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBsb2FkZXJTdWJqZWN0ID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgcHVibGljIGxvYWRlclN0YXRlID0gPE9ic2VydmFibGU8Ym9vbGVhbj4+IHRoaXMubG9hZGVyU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgcHJpdmF0ZSBsb2FkZXJRdWV1ZUVsZW1lbnRzOiBBcnJheTxMb2FkZXJRdWV1ZUVsZW1lbnQ+ID0gW107XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBzaG93UHJvZ3Jlc3NCYXIoKTogTG9hZGVyUXVldWVFbGVtZW50IHtcbiAgICBjb25zdCBlbGVtZW50OiBMb2FkZXJRdWV1ZUVsZW1lbnQgPSB7XG4gICAgICBpZDogRGF0ZS5ub3coKVxuICAgIH07XG4gICAgdGhpcy5sb2FkZXJRdWV1ZUVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgdGhpcy5sb2FkZXJTdWJqZWN0Lm5leHQodHJ1ZSk7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICBoaWRlUHJvZ3Jlc3NCYXIoZWxlbWVudDogTG9hZGVyUXVldWVFbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmxvYWRlclF1ZXVlRWxlbWVudHMuZmluZEluZGV4KGVsID0+IGVsZW1lbnQuaWQgPT09IGVsLmlkKTtcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgdGhpcy5sb2FkZXJRdWV1ZUVsZW1lbnRzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICAgIGlmICh0aGlzLmxvYWRlclF1ZXVlRWxlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmxvYWRlclN1YmplY3QubmV4dChmYWxzZSk7XG4gICAgfVxuICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRlclF1ZXVlRWxlbWVudCB7XG4gIGlkOiBudW1iZXI7XG59XG4iXX0=
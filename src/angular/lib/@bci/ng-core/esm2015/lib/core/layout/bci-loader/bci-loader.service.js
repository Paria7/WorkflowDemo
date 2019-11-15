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
export class BciLoaderService {
    constructor() {
        this.loaderSubject = new Subject();
        this.loaderState = /** @type {?} */ (this.loaderSubject.asObservable());
        this.loaderQueueElements = [];
    }
    /**
     * @return {?}
     */
    showProgressBar() {
        /** @type {?} */
        const element = {
            id: Date.now()
        };
        this.loaderQueueElements.push(element);
        this.loaderSubject.next(true);
        return element;
    }
    /**
     * @param {?} element
     * @return {?}
     */
    hideProgressBar(element) {
        /** @type {?} */
        const index = this.loaderQueueElements.findIndex(el => element.id === el.id);
        if (index > -1) {
            this.loaderQueueElements.splice(index, 1);
        }
        if (this.loaderQueueElements.length === 0) {
            this.loaderSubject.next(false);
        }
    }
}
BciLoaderService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
BciLoaderService.ctorParameters = () => [];
/** @nocollapse */ BciLoaderService.ngInjectableDef = i0.defineInjectable({ factory: function BciLoaderService_Factory() { return new BciLoaderService(); }, token: BciLoaderService, providedIn: "root" });
if (false) {
    /** @type {?} */
    BciLoaderService.prototype.loaderSubject;
    /** @type {?} */
    BciLoaderService.prototype.loaderState;
    /** @type {?} */
    BciLoaderService.prototype.loaderQueueElements;
}
export class LoaderQueueElement {
}
if (false) {
    /** @type {?} */
    LoaderQueueElement.prototype.id;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmNpLWxvYWRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGJjaS9uZy1jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvcmUvbGF5b3V0L2JjaS1sb2FkZXIvYmNpLWxvYWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBSzNDLE1BQU07SUFNSjs2QkFKd0IsSUFBSSxPQUFPLEVBQVc7NkNBQ0gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUU7bUNBQ25CLEVBQUU7S0FHMUQ7Ozs7SUFFRCxlQUFlOztRQUNiLE1BQU0sT0FBTyxHQUF1QjtZQUNsQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRTtTQUNmLENBQUM7UUFDRixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlCLE1BQU0sQ0FBQyxPQUFPLENBQUM7S0FDaEI7Ozs7O0lBRUQsZUFBZSxDQUFDLE9BQTJCOztRQUN6QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDN0UsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNmLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzNDO1FBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2hDO0tBQ0Y7OztZQTdCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7Ozs7Ozs7Ozs7QUErQkQsTUFBTTtDQUVMIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEJjaUxvYWRlclNlcnZpY2Uge1xuXG4gIHByaXZhdGUgbG9hZGVyU3ViamVjdCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gIHB1YmxpYyBsb2FkZXJTdGF0ZSA9IDxPYnNlcnZhYmxlPGJvb2xlYW4+PiB0aGlzLmxvYWRlclN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gIHByaXZhdGUgbG9hZGVyUXVldWVFbGVtZW50czogQXJyYXk8TG9hZGVyUXVldWVFbGVtZW50PiA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgc2hvd1Byb2dyZXNzQmFyKCk6IExvYWRlclF1ZXVlRWxlbWVudCB7XG4gICAgY29uc3QgZWxlbWVudDogTG9hZGVyUXVldWVFbGVtZW50ID0ge1xuICAgICAgaWQ6IERhdGUubm93KClcbiAgICB9O1xuICAgIHRoaXMubG9hZGVyUXVldWVFbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIHRoaXMubG9hZGVyU3ViamVjdC5uZXh0KHRydWUpO1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgaGlkZVByb2dyZXNzQmFyKGVsZW1lbnQ6IExvYWRlclF1ZXVlRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5sb2FkZXJRdWV1ZUVsZW1lbnRzLmZpbmRJbmRleChlbCA9PiBlbGVtZW50LmlkID09PSBlbC5pZCk7XG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMubG9hZGVyUXVldWVFbGVtZW50cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgICBpZiAodGhpcy5sb2FkZXJRdWV1ZUVsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5sb2FkZXJTdWJqZWN0Lm5leHQoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkZXJRdWV1ZUVsZW1lbnQge1xuICBpZDogbnVtYmVyO1xufVxuIl19
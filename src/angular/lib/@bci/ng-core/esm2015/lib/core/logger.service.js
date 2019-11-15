/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class LoggerService {
    /**
     * @param {?} msg
     * @return {?}
     */
    log(msg) {
        console.log(msg);
    }
    /**
     * @param {?} msg
     * @return {?}
     */
    error(msg) {
        console.error(msg);
    }
}
LoggerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */ LoggerService.ngInjectableDef = i0.defineInjectable({ factory: function LoggerService_Factory() { return new LoggerService(); }, token: LoggerService, providedIn: "root" });

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYmNpL25nLWNvcmUvIiwic291cmNlcyI6WyJsaWIvY29yZS9sb2dnZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLM0MsTUFBTTs7Ozs7SUFFSixHQUFHLENBQUMsR0FBVztRQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDbEI7Ozs7O0lBRUQsS0FBSyxDQUFDLEdBQVc7UUFDZixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3BCOzs7WUFYRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTG9nZ2VyU2VydmljZSB7XG5cbiAgbG9nKG1zZzogc3RyaW5nKSB7XG4gICAgY29uc29sZS5sb2cobXNnKTtcbiAgfVxuXG4gIGVycm9yKG1zZzogc3RyaW5nKSB7XG4gICAgY29uc29sZS5lcnJvcihtc2cpO1xuICB9XG59XG4iXX0=
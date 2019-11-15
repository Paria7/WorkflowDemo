/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var LoggerService = /** @class */ (function () {
    function LoggerService() {
    }
    /**
     * @param {?} msg
     * @return {?}
     */
    LoggerService.prototype.log = /**
     * @param {?} msg
     * @return {?}
     */
    function (msg) {
        console.log(msg);
    };
    /**
     * @param {?} msg
     * @return {?}
     */
    LoggerService.prototype.error = /**
     * @param {?} msg
     * @return {?}
     */
    function (msg) {
        console.error(msg);
    };
    LoggerService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */ LoggerService.ngInjectableDef = i0.defineInjectable({ factory: function LoggerService_Factory() { return new LoggerService(); }, token: LoggerService, providedIn: "root" });
    return LoggerService;
}());
export { LoggerService };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYmNpL25nLWNvcmUvIiwic291cmNlcyI6WyJsaWIvY29yZS9sb2dnZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7O0lBT3pDLDJCQUFHOzs7O0lBQUgsVUFBSSxHQUFXO1FBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNsQjs7Ozs7SUFFRCw2QkFBSzs7OztJQUFMLFVBQU0sR0FBVztRQUNmLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDcEI7O2dCQVhGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozt3QkFSRDs7U0FTYSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIExvZ2dlclNlcnZpY2Uge1xuXG4gIGxvZyhtc2c6IHN0cmluZykge1xuICAgIGNvbnNvbGUubG9nKG1zZyk7XG4gIH1cblxuICBlcnJvcihtc2c6IHN0cmluZykge1xuICAgIGNvbnNvbGUuZXJyb3IobXNnKTtcbiAgfVxufVxuIl19
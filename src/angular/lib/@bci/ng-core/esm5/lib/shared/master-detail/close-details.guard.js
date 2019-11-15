/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
import { Injectable, Type } from '@angular/core';
import { identity, Observable, of } from 'rxjs';
import { defaultIfEmpty, filter, flatMap, map } from 'rxjs/operators';
var CloseDetailsGuard = /** @class */ (function () {
    function CloseDetailsGuard() {
    }
    /**
     * @param {?} component
     * @param {?} currentRoute
     * @param {?} currentState
     * @param {?=} nextState
     * @return {?}
     */
    CloseDetailsGuard.prototype.canDeactivate = /**
     * @param {?} component
     * @param {?} currentRoute
     * @param {?} currentState
     * @param {?=} nextState
     * @return {?}
     */
    function (component, currentRoute, currentState, nextState) {
        if (component) {
            return this.canDeactivateDetailsComponent(/** @type {?} */ (component), nextState, currentState);
        }
        else {
            return false;
        }
    };
    /**
     * @template T
     * @param {?} value
     * @return {?}
     */
    CloseDetailsGuard.prototype.asObservable = /**
     * @template T
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value instanceof Observable) {
            return value;
        }
        return of(value);
    };
    /**
     * @param {?} currentState
     * @param {?} nextState
     * @return {?}
     */
    CloseDetailsGuard.prototype.areDetailRoutesWithSameMaster = /**
     * @param {?} currentState
     * @param {?} nextState
     * @return {?}
     */
    function (currentState, nextState) {
        if (!nextState) {
            return false;
        }
        /** @type {?} */
        var currentChild = currentState.root.firstChild;
        /** @type {?} */
        var nextChild = nextState.root.firstChild;
        while (!!currentChild && !!nextChild) {
            if (this.isDetailsComponentType(currentChild.component)) {
                if (!this.isDetailsComponentType(nextChild.component)) {
                    return false;
                }
                else {
                    return currentChild.parent.component === nextChild.parent.component;
                }
            }
            else {
                currentChild = currentChild.firstChild;
                nextChild = nextChild.firstChild;
            }
        }
        return false;
    };
    /**
     * @param {?} componentType
     * @return {?}
     */
    CloseDetailsGuard.prototype.isDetailsComponentType = /**
     * @param {?} componentType
     * @return {?}
     */
    function (componentType) {
        if (componentType instanceof Type) {
            return this.isDetailsComponent(componentType.prototype);
        }
        return false;
    };
    /**
     * @param {?} component
     * @return {?}
     */
    CloseDetailsGuard.prototype.isDetailsComponent = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return component.canCloseDetails !== undefined;
    };
    /**
     * @param {?} component
     * @param {?} nextState
     * @param {?} currentState
     * @return {?}
     */
    CloseDetailsGuard.prototype.canDeactivateDetailsComponent = /**
     * @param {?} component
     * @param {?} nextState
     * @param {?} currentState
     * @return {?}
     */
    function (component, nextState, currentState) {
        var _this = this;
        return this.asObservable(component.canCloseDetails()).pipe(filter(identity), flatMap(function () { return _this.areDetailRoutesWithSameMaster(currentState, nextState)
            ? of(true)
            : _this.asObservable(component.closeDetails()).pipe(map(function () { return true; })); }), defaultIfEmpty(false));
    };
    CloseDetailsGuard.decorators = [
        { type: Injectable },
    ];
    return CloseDetailsGuard;
}());
export { CloseDetailsGuard };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvc2UtZGV0YWlscy5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BiY2kvbmctY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvbWFzdGVyLWRldGFpbC9jbG9zZS1kZXRhaWxzLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHaEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7OztJQU9wRSx5Q0FBYTs7Ozs7OztJQUFiLFVBQWMsU0FBMkIsRUFBRSxZQUFvQyxFQUFFLFlBQWlDLEVBQUUsU0FBK0I7UUFDakosRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUMsNkJBQTZCLG1CQUFvQixTQUFTLEdBQUUsU0FBUyxFQUFFLFlBQVksQ0FBQyxDQUFDO1NBQ2xHO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsS0FBSyxDQUFDO1NBQ2Q7S0FDRjs7Ozs7O0lBRVMsd0NBQVk7Ozs7O0lBQXRCLFVBQTBCLEtBQXdCO1FBQ2hELEVBQUUsQ0FBQyxDQUFDLEtBQUssWUFBWSxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDZDtRQUNELE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbEI7Ozs7OztJQUVTLHlEQUE2Qjs7Ozs7SUFBdkMsVUFBd0MsWUFBaUMsRUFBRSxTQUE4QjtRQUN2RyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDZixNQUFNLENBQUMsS0FBSyxDQUFDO1NBQ2Q7O1FBRUQsSUFBSSxZQUFZLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7O1FBQ2hELElBQUksU0FBUyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksSUFBSSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDckMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hELEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3RELE1BQU0sQ0FBQyxLQUFLLENBQUM7aUJBQ2Q7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO2lCQUNyRTthQUNGO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sWUFBWSxHQUFHLFlBQVksQ0FBQyxVQUFVLENBQUM7Z0JBQ3ZDLFNBQVMsR0FBRyxTQUFTLENBQUMsVUFBVSxDQUFDO2FBQ2xDO1NBQ0Y7UUFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO0tBQ2Q7Ozs7O0lBRVMsa0RBQXNCOzs7O0lBQWhDLFVBQWlDLGFBQXdDO1FBQ3ZFLEVBQUUsQ0FBQyxDQUFDLGFBQWEsWUFBWSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3pEO1FBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztLQUNkOzs7OztJQUVTLDhDQUFrQjs7OztJQUE1QixVQUE2QixTQUFjO1FBQ3pDLE1BQU0sQ0FBQyxTQUFTLENBQUMsZUFBZSxLQUFLLFNBQVMsQ0FBQztLQUNoRDs7Ozs7OztJQUVPLHlEQUE2Qjs7Ozs7O2NBQUMsU0FBMkIsRUFBRSxTQUE4QixFQUFFLFlBQWlDOztRQUNsSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQ3hELE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFDaEIsT0FBTyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsNkJBQTZCLENBQUMsWUFBWSxFQUFFLFNBQVMsQ0FBQztZQUN2RSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztZQUNWLENBQUMsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJLENBQUMsQ0FBQyxFQUZ2RCxDQUV1RCxDQUFDLEVBQ3RFLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7Z0JBekQ1QixVQUFVOzs0QkFiWDs7U0FjYSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IENhbkRlYWN0aXZhdGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaWRlbnRpdHksIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXJTdGF0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyL3NyYy9yb3V0ZXJfc3RhdGUnO1xuXG5pbXBvcnQgeyBkZWZhdWx0SWZFbXB0eSwgZmlsdGVyLCBmbGF0TWFwLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBEZXRhaWxzQ29tcG9uZW50IH0gZnJvbSAnLi9kZXRhaWxzLWNvbXBvbmVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENsb3NlRGV0YWlsc0d1YXJkIGltcGxlbWVudHMgQ2FuRGVhY3RpdmF0ZTxEZXRhaWxzQ29tcG9uZW50PiB7XG5cbiAgY2FuRGVhY3RpdmF0ZShjb21wb25lbnQ6IERldGFpbHNDb21wb25lbnQsIGN1cnJlbnRSb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgY3VycmVudFN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBuZXh0U3RhdGU/OiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxib29sZWFuPiB8IFByb21pc2U8Ym9vbGVhbj4gfCBib29sZWFuIHtcbiAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5jYW5EZWFjdGl2YXRlRGV0YWlsc0NvbXBvbmVudCg8RGV0YWlsc0NvbXBvbmVudD4gY29tcG9uZW50LCBuZXh0U3RhdGUsIGN1cnJlbnRTdGF0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgYXNPYnNlcnZhYmxlPFQ+KHZhbHVlOiBUIHwgT2JzZXJ2YWJsZTxUPik6IE9ic2VydmFibGU8VD4ge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE9ic2VydmFibGUpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG9mKHZhbHVlKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhcmVEZXRhaWxSb3V0ZXNXaXRoU2FtZU1hc3RlcihjdXJyZW50U3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QsIG5leHRTdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCkge1xuICAgIGlmICghbmV4dFN0YXRlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbGV0IGN1cnJlbnRDaGlsZCA9IGN1cnJlbnRTdGF0ZS5yb290LmZpcnN0Q2hpbGQ7XG4gICAgbGV0IG5leHRDaGlsZCA9IG5leHRTdGF0ZS5yb290LmZpcnN0Q2hpbGQ7XG4gICAgd2hpbGUgKCEhY3VycmVudENoaWxkICYmICEhbmV4dENoaWxkKSB7XG4gICAgICBpZiAodGhpcy5pc0RldGFpbHNDb21wb25lbnRUeXBlKGN1cnJlbnRDaGlsZC5jb21wb25lbnQpKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0RldGFpbHNDb21wb25lbnRUeXBlKG5leHRDaGlsZC5jb21wb25lbnQpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBjdXJyZW50Q2hpbGQucGFyZW50LmNvbXBvbmVudCA9PT0gbmV4dENoaWxkLnBhcmVudC5jb21wb25lbnQ7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJlbnRDaGlsZCA9IGN1cnJlbnRDaGlsZC5maXJzdENoaWxkO1xuICAgICAgICBuZXh0Q2hpbGQgPSBuZXh0Q2hpbGQuZmlyc3RDaGlsZDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJvdGVjdGVkIGlzRGV0YWlsc0NvbXBvbmVudFR5cGUoY29tcG9uZW50VHlwZTogVHlwZTxhbnk+IHwgc3RyaW5nIHwgbnVsbCkge1xuICAgIGlmIChjb21wb25lbnRUeXBlIGluc3RhbmNlb2YgVHlwZSkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNEZXRhaWxzQ29tcG9uZW50KGNvbXBvbmVudFR5cGUucHJvdG90eXBlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJvdGVjdGVkIGlzRGV0YWlsc0NvbXBvbmVudChjb21wb25lbnQ6IGFueSk6IGNvbXBvbmVudCBpcyBEZXRhaWxzQ29tcG9uZW50IHtcbiAgICByZXR1cm4gY29tcG9uZW50LmNhbkNsb3NlRGV0YWlscyAhPT0gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHJpdmF0ZSBjYW5EZWFjdGl2YXRlRGV0YWlsc0NvbXBvbmVudChjb21wb25lbnQ6IERldGFpbHNDb21wb25lbnQsIG5leHRTdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCwgY3VycmVudFN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KSB7XG4gICAgcmV0dXJuIHRoaXMuYXNPYnNlcnZhYmxlKGNvbXBvbmVudC5jYW5DbG9zZURldGFpbHMoKSkucGlwZShcbiAgICAgIGZpbHRlcihpZGVudGl0eSksXG4gICAgICBmbGF0TWFwKCgpID0+IHRoaXMuYXJlRGV0YWlsUm91dGVzV2l0aFNhbWVNYXN0ZXIoY3VycmVudFN0YXRlLCBuZXh0U3RhdGUpXG4gICAgICAgID8gb2YodHJ1ZSlcbiAgICAgICAgOiB0aGlzLmFzT2JzZXJ2YWJsZShjb21wb25lbnQuY2xvc2VEZXRhaWxzKCkpLnBpcGUobWFwKCgpID0+IHRydWUpKSksXG4gICAgICBkZWZhdWx0SWZFbXB0eShmYWxzZSkpO1xuICB9XG59XG4iXX0=
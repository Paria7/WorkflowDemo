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
export class CloseDetailsGuard {
    /**
     * @param {?} component
     * @param {?} currentRoute
     * @param {?} currentState
     * @param {?=} nextState
     * @return {?}
     */
    canDeactivate(component, currentRoute, currentState, nextState) {
        if (component) {
            return this.canDeactivateDetailsComponent(/** @type {?} */ (component), nextState, currentState);
        }
        else {
            return false;
        }
    }
    /**
     * @template T
     * @param {?} value
     * @return {?}
     */
    asObservable(value) {
        if (value instanceof Observable) {
            return value;
        }
        return of(value);
    }
    /**
     * @param {?} currentState
     * @param {?} nextState
     * @return {?}
     */
    areDetailRoutesWithSameMaster(currentState, nextState) {
        if (!nextState) {
            return false;
        }
        /** @type {?} */
        let currentChild = currentState.root.firstChild;
        /** @type {?} */
        let nextChild = nextState.root.firstChild;
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
    }
    /**
     * @param {?} componentType
     * @return {?}
     */
    isDetailsComponentType(componentType) {
        if (componentType instanceof Type) {
            return this.isDetailsComponent(componentType.prototype);
        }
        return false;
    }
    /**
     * @param {?} component
     * @return {?}
     */
    isDetailsComponent(component) {
        return component.canCloseDetails !== undefined;
    }
    /**
     * @param {?} component
     * @param {?} nextState
     * @param {?} currentState
     * @return {?}
     */
    canDeactivateDetailsComponent(component, nextState, currentState) {
        return this.asObservable(component.canCloseDetails()).pipe(filter(identity), flatMap(() => this.areDetailRoutesWithSameMaster(currentState, nextState)
            ? of(true)
            : this.asObservable(component.closeDetails()).pipe(map(() => true))), defaultIfEmpty(false));
    }
}
CloseDetailsGuard.decorators = [
    { type: Injectable },
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvc2UtZGV0YWlscy5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BiY2kvbmctY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvbWFzdGVyLWRldGFpbC9jbG9zZS1kZXRhaWxzLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHaEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBS3RFLE1BQU07Ozs7Ozs7O0lBRUosYUFBYSxDQUFDLFNBQTJCLEVBQUUsWUFBb0MsRUFBRSxZQUFpQyxFQUFFLFNBQStCO1FBQ2pKLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLDZCQUE2QixtQkFBb0IsU0FBUyxHQUFFLFNBQVMsRUFBRSxZQUFZLENBQUMsQ0FBQztTQUNsRztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLEtBQUssQ0FBQztTQUNkO0tBQ0Y7Ozs7OztJQUVTLFlBQVksQ0FBSSxLQUF3QjtRQUNoRCxFQUFFLENBQUMsQ0FBQyxLQUFLLFlBQVksVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNoQyxNQUFNLENBQUMsS0FBSyxDQUFDO1NBQ2Q7UUFDRCxNQUFNLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2xCOzs7Ozs7SUFFUyw2QkFBNkIsQ0FBQyxZQUFpQyxFQUFFLFNBQThCO1FBQ3ZHLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNmLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDZDs7UUFFRCxJQUFJLFlBQVksR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQzs7UUFDaEQsSUFBSSxTQUFTLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDMUMsT0FBTyxDQUFDLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNyQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDeEQsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDdEQsTUFBTSxDQUFDLEtBQUssQ0FBQztpQkFDZDtnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEtBQUssU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7aUJBQ3JFO2FBQ0Y7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixZQUFZLEdBQUcsWUFBWSxDQUFDLFVBQVUsQ0FBQztnQkFDdkMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUM7YUFDbEM7U0FDRjtRQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7S0FDZDs7Ozs7SUFFUyxzQkFBc0IsQ0FBQyxhQUF3QztRQUN2RSxFQUFFLENBQUMsQ0FBQyxhQUFhLFlBQVksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN6RDtRQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7S0FDZDs7Ozs7SUFFUyxrQkFBa0IsQ0FBQyxTQUFjO1FBQ3pDLE1BQU0sQ0FBQyxTQUFTLENBQUMsZUFBZSxLQUFLLFNBQVMsQ0FBQztLQUNoRDs7Ozs7OztJQUVPLDZCQUE2QixDQUFDLFNBQTJCLEVBQUUsU0FBOEIsRUFBRSxZQUFpQztRQUNsSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQ3hELE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFDaEIsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDO1lBQ3ZFLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ1YsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ3RFLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7O1lBekQ1QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBDYW5EZWFjdGl2YXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEluamVjdGFibGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlkZW50aXR5LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUm91dGVyU3RhdGVTbmFwc2hvdCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci9zcmMvcm91dGVyX3N0YXRlJztcblxuaW1wb3J0IHsgZGVmYXVsdElmRW1wdHksIGZpbHRlciwgZmxhdE1hcCwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRGV0YWlsc0NvbXBvbmVudCB9IGZyb20gJy4vZGV0YWlscy1jb21wb25lbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDbG9zZURldGFpbHNHdWFyZCBpbXBsZW1lbnRzIENhbkRlYWN0aXZhdGU8RGV0YWlsc0NvbXBvbmVudD4ge1xuXG4gIGNhbkRlYWN0aXZhdGUoY29tcG9uZW50OiBEZXRhaWxzQ29tcG9uZW50LCBjdXJyZW50Um91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIGN1cnJlbnRTdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCwgbmV4dFN0YXRlPzogUm91dGVyU3RhdGVTbmFwc2hvdCk6IE9ic2VydmFibGU8Ym9vbGVhbj4gfCBQcm9taXNlPGJvb2xlYW4+IHwgYm9vbGVhbiB7XG4gICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgcmV0dXJuIHRoaXMuY2FuRGVhY3RpdmF0ZURldGFpbHNDb21wb25lbnQoPERldGFpbHNDb21wb25lbnQ+IGNvbXBvbmVudCwgbmV4dFN0YXRlLCBjdXJyZW50U3RhdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGFzT2JzZXJ2YWJsZTxUPih2YWx1ZTogVCB8IE9ic2VydmFibGU8VD4pOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBPYnNlcnZhYmxlKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBvZih2YWx1ZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYXJlRGV0YWlsUm91dGVzV2l0aFNhbWVNYXN0ZXIoY3VycmVudFN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBuZXh0U3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpIHtcbiAgICBpZiAoIW5leHRTdGF0ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGxldCBjdXJyZW50Q2hpbGQgPSBjdXJyZW50U3RhdGUucm9vdC5maXJzdENoaWxkO1xuICAgIGxldCBuZXh0Q2hpbGQgPSBuZXh0U3RhdGUucm9vdC5maXJzdENoaWxkO1xuICAgIHdoaWxlICghIWN1cnJlbnRDaGlsZCAmJiAhIW5leHRDaGlsZCkge1xuICAgICAgaWYgKHRoaXMuaXNEZXRhaWxzQ29tcG9uZW50VHlwZShjdXJyZW50Q2hpbGQuY29tcG9uZW50KSkge1xuICAgICAgICBpZiAoIXRoaXMuaXNEZXRhaWxzQ29tcG9uZW50VHlwZShuZXh0Q2hpbGQuY29tcG9uZW50KSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gY3VycmVudENoaWxkLnBhcmVudC5jb21wb25lbnQgPT09IG5leHRDaGlsZC5wYXJlbnQuY29tcG9uZW50O1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyZW50Q2hpbGQgPSBjdXJyZW50Q2hpbGQuZmlyc3RDaGlsZDtcbiAgICAgICAgbmV4dENoaWxkID0gbmV4dENoaWxkLmZpcnN0Q2hpbGQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByb3RlY3RlZCBpc0RldGFpbHNDb21wb25lbnRUeXBlKGNvbXBvbmVudFR5cGU6IFR5cGU8YW55PiB8IHN0cmluZyB8IG51bGwpIHtcbiAgICBpZiAoY29tcG9uZW50VHlwZSBpbnN0YW5jZW9mIFR5cGUpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzRGV0YWlsc0NvbXBvbmVudChjb21wb25lbnRUeXBlLnByb3RvdHlwZSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByb3RlY3RlZCBpc0RldGFpbHNDb21wb25lbnQoY29tcG9uZW50OiBhbnkpOiBjb21wb25lbnQgaXMgRGV0YWlsc0NvbXBvbmVudCB7XG4gICAgcmV0dXJuIGNvbXBvbmVudC5jYW5DbG9zZURldGFpbHMgIT09IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHByaXZhdGUgY2FuRGVhY3RpdmF0ZURldGFpbHNDb21wb25lbnQoY29tcG9uZW50OiBEZXRhaWxzQ29tcG9uZW50LCBuZXh0U3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QsIGN1cnJlbnRTdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCkge1xuICAgIHJldHVybiB0aGlzLmFzT2JzZXJ2YWJsZShjb21wb25lbnQuY2FuQ2xvc2VEZXRhaWxzKCkpLnBpcGUoXG4gICAgICBmaWx0ZXIoaWRlbnRpdHkpLFxuICAgICAgZmxhdE1hcCgoKSA9PiB0aGlzLmFyZURldGFpbFJvdXRlc1dpdGhTYW1lTWFzdGVyKGN1cnJlbnRTdGF0ZSwgbmV4dFN0YXRlKVxuICAgICAgICA/IG9mKHRydWUpXG4gICAgICAgIDogdGhpcy5hc09ic2VydmFibGUoY29tcG9uZW50LmNsb3NlRGV0YWlscygpKS5waXBlKG1hcCgoKSA9PiB0cnVlKSkpLFxuICAgICAgZGVmYXVsdElmRW1wdHkoZmFsc2UpKTtcbiAgfVxufVxuIl19
import { CanDeactivate } from '@angular/router';
import { Type } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router/src/router_state';
import { DetailsComponent } from './details-component';
export declare class CloseDetailsGuard implements CanDeactivate<DetailsComponent> {
    canDeactivate(component: DetailsComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean;
    protected asObservable<T>(value: T | Observable<T>): Observable<T>;
    protected areDetailRoutesWithSameMaster(currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean;
    protected isDetailsComponentType(componentType: Type<any> | string | null): boolean;
    protected isDetailsComponent(component: any): component is DetailsComponent;
    private canDeactivateDetailsComponent(component, nextState, currentState);
}

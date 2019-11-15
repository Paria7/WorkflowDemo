import { Location, LocationStrategy } from '@angular/common';
import { NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';
export declare class BciSidebarService {
    private router;
    private location;
    private locationStrategy;
    private sidebarState$;
    private sidebarVisibility$;
    constructor(router: Router, location: Location, locationStrategy: LocationStrategy);
    setSidebarState(open: boolean): void;
    setSidebarVisibility(visible: boolean): void;
    getSidebarState(): Observable<boolean>;
    getSidebarVisibility(): Observable<boolean>;
    /**
     * Navigates to the URL either internally (with Angular Router) or externally (window.location).
     * If there is not http protocol or if the origin is the same and the route is part of the router config, navigate internally.
     * Else, navigate externally.
     * @param url Absolute URL or internal route.
     * @param extras {@link NavigationExtras}
     * @returns The {@link router} navigate return
     */
    navigateToUrl(url: string, extras?: NavigationExtras): Promise<boolean>;
}

import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SidebarNavItem } from '../layout';
import { CoreConfig } from '../core-configuration/core-config';
export declare class NavigationService {
    private http;
    private location;
    private config;
    sidebarLinks: SidebarNavItem[];
    constructor(http: HttpClient, location: Location, config: CoreConfig);
    getNavigationItems(): Observable<SidebarNavItem[]>;
}

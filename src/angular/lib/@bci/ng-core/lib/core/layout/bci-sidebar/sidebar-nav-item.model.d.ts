import { Type } from '@angular/core';
import { ClosableOverlayComponentModel } from './closable-overlay-component.model';
export declare class SidebarNavItem {
    id?: string;
    title: string;
    url?: string;
    queryParams?: {
        [key: string]: string;
    };
    position?: number;
    items?: SidebarNavItem[];
    icon?: string;
    cb?: () => void;
    routerLinkActiveOptions?: {
        exact: boolean;
    };
    overlay?: {
        component: Type<ClosableOverlayComponentModel<any>>;
        config: any;
    };
}

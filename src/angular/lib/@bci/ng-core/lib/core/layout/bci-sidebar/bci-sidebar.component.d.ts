import { OnDestroy, OnInit } from '@angular/core';
import { SidebarNavItem } from './sidebar-nav-item.model';
import { BciSidebarService } from './bci-sidebar.service';
export declare class BciSidebarComponent implements OnInit, OnDestroy {
    private sidebarService;
    applicationTitle: string;
    sidebarLinks: SidebarNavItem[];
    private sidenav;
    private open;
    private visible;
    private componentDestroyed$;
    constructor(sidebarService: BciSidebarService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    toggleSideNavigationBar(): void;
    isOpen(): boolean;
    isVisible(): boolean;
}

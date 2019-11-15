import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SidebarNavItem } from '../bci-sidebar/sidebar-nav-item.model';
import { BreadcrumbsService } from '../../breadcrumbs.service';
export declare class BciAppComponent implements OnInit, OnChanges {
    private breadcrumbsService;
    applicationTitle: string;
    sidebarLinks: SidebarNavItem[];
    sidebarFooterLinks: SidebarNavItem[];
    navigationItems: any[];
    constructor(breadcrumbsService: BreadcrumbsService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}

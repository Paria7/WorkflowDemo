import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SidebarNavItem } from '../bci-sidebar/sidebar-nav-item.model';
export declare class BciSidebarNavListComponent implements OnInit, OnChanges {
    navItems: SidebarNavItem[];
    /**
     * @todo enable skipSorting to be set (SidebarService? Configuration?)
     */
    skipSorting: boolean;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}

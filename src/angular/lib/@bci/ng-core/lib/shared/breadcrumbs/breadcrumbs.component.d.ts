import { AfterContentInit, OnDestroy } from '@angular/core';
export declare class BreadcrumbsComponent implements AfterContentInit, OnDestroy {
    true: any;
    private breadcrumbs;
    /**
     * Maximum number of breadcrumbs shown starting from the root.
     */
    fixedLead: number;
    /**
     * Maximum number of breadscrumbs shown starting from the current page.
     */
    fixedTail: number;
    private componentDestroyed$;
    constructor();
    ngOnDestroy(): void;
    ngAfterContentInit(): void;
    protected isShown(index: number): boolean;
}

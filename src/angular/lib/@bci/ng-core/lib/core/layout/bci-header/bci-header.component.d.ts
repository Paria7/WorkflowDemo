import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreadcrumbsService } from '../../breadcrumbs.service';
export declare class BciHeaderComponent implements OnInit {
    private router;
    breadcrumbService: BreadcrumbsService;
    header: string;
    logoRoute: string;
    constructor(router: Router, breadcrumbService: BreadcrumbsService);
    ngOnInit(): void;
    onLogoClicked(): void;
}

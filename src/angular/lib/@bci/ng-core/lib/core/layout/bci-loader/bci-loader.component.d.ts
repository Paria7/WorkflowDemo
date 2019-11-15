import { OnDestroy, OnInit } from '@angular/core';
import { BciLoaderService } from './bci-loader.service';
export declare class BciLoaderComponent implements OnInit, OnDestroy {
    private bciLoaderService;
    show: boolean;
    private componentDestroyed$;
    constructor(bciLoaderService: BciLoaderService);
    ngOnInit(): void;
    ngOnDestroy(): void;
}

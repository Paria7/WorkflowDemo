import { OnInit } from '@angular/core';
export declare class PageContentComponent implements OnInit {
    /**
     * Sets width and height to 100% so that the complete content space is filled. Default: true
     */
    fullSpace: boolean;
    /**
     * Sets padding to 32px. To enable full-width content, set this to false. Default: true
     */
    padding: boolean;
    constructor();
    ngOnInit(): void;
}

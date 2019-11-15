import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { CoreConfig } from './core-config';
export declare class CoreConfigurationService {
    private http;
    private location;
    private config;
    constructor(http: HttpClient, location: Location);
    load(url: string): Promise<CoreConfig>;
    getConfig(): any;
}

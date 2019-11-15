import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { ImprintModel } from './imprint.model';
export declare class BciImprintDetailsService {
    private httpClient;
    private location;
    constructor(httpClient: HttpClient, location: Location);
    /**
     * Get imprint details for imprint view.
     */
    getImprintDetails(): Observable<ImprintModel>;
}

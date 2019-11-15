import { Observable } from 'rxjs';
export interface DetailsComponent {
    canCloseDetails(): boolean | Observable<boolean>;
    closeDetails(): boolean | Observable<boolean>;
}

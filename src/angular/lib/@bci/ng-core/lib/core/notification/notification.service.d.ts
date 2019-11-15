import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoggerService } from '../logger.service';
export declare class NotificationService {
    private router;
    private logger;
    private subject;
    private keepAfterNavigationChange;
    constructor(router: Router, logger: LoggerService);
    success(message: string, keepAfterNavigationChange?: boolean): void;
    error(message: string, keepAfterNavigationChange?: boolean): void;
    getMessage(): Observable<any>;
}

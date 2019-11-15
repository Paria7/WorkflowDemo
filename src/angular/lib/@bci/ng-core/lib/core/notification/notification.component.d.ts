import { OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';
import { NotificationItem } from './notification-item';
import { NotificationService } from './notification.service';
export declare class NotificationComponent implements OnInit {
    private logger;
    private notificationService;
    message: NotificationItem;
    constructor(logger: LoggerService, notificationService: NotificationService);
    ngOnInit(): void;
}

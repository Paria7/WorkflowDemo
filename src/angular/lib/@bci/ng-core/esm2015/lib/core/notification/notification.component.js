/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';
import { NotificationService } from './notification.service';
export class NotificationComponent {
    /**
     * @param {?} logger
     * @param {?} notificationService
     */
    constructor(logger, notificationService) {
        this.logger = logger;
        this.notificationService = notificationService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.notificationService.getMessage().subscribe(message => {
            this.message = message;
        });
    }
}
NotificationComponent.decorators = [
    { type: Component, args: [{
                selector: 'bci-notification',
                template: `<!--
  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
  -->

<div *ngIf="message" class="notification-container" [class.bg-danger]="message.type==='error'">
  <span *ngIf="message.type==='error'" class="icon-problem icon">&nbsp;</span>
  {{message.text}}
</div>
`,
                styles: [`/*!
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */.notification-container{position:absolute;left:50%;width:30em;-webkit-transform:translate(-50%);transform:translate(-50%);border:1px solid #a0a0a0;padding:.5rem 1.5rem;border-top:0;border-bottom-left-radius:3px;border-bottom-right-radius:3px}`]
            },] },
];
/** @nocollapse */
NotificationComponent.ctorParameters = () => [
    { type: LoggerService },
    { type: NotificationService }
];
if (false) {
    /** @type {?} */
    NotificationComponent.prototype.message;
    /** @type {?} */
    NotificationComponent.prototype.logger;
    /** @type {?} */
    NotificationComponent.prototype.notificationService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BiY2kvbmctY29yZS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVsRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQWlCN0QsTUFBTTs7Ozs7SUFHSixZQUFvQixNQUFxQixFQUFVLG1CQUF3QztRQUF2RSxXQUFNLEdBQU4sTUFBTSxDQUFlO1FBQVUsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtLQUMxRjs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxFQUFFLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3hELElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1NBQ3hCLENBQUMsQ0FBQztLQUNKOzs7WUF6QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRTs7Ozs7Ozs7Q0FRWDtnQkFDQyxNQUFNLEVBQUUsQ0FBQzs7c1BBRTJPLENBQUM7YUFDdFA7Ozs7WUFsQlEsYUFBYTtZQUViLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvZ2dlclNlcnZpY2UgfSBmcm9tICcuLi9sb2dnZXIuc2VydmljZSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25JdGVtIH0gZnJvbSAnLi9ub3RpZmljYXRpb24taXRlbSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9ub3RpZmljYXRpb24uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjaS1ub3RpZmljYXRpb24nLFxuICB0ZW1wbGF0ZTogYDwhLS1cbiAgfiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gIC0tPlxuXG48ZGl2ICpuZ0lmPVwibWVzc2FnZVwiIGNsYXNzPVwibm90aWZpY2F0aW9uLWNvbnRhaW5lclwiIFtjbGFzcy5iZy1kYW5nZXJdPVwibWVzc2FnZS50eXBlPT09J2Vycm9yJ1wiPlxuICA8c3BhbiAqbmdJZj1cIm1lc3NhZ2UudHlwZT09PSdlcnJvcidcIiBjbGFzcz1cImljb24tcHJvYmxlbSBpY29uXCI+Jm5ic3A7PC9zcGFuPlxuICB7e21lc3NhZ2UudGV4dH19XG48L2Rpdj5cbmAsXG4gIHN0eWxlczogW2AvKiFcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqLy5ub3RpZmljYXRpb24tY29udGFpbmVye3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6NTAlO3dpZHRoOjMwZW07LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSk7Ym9yZGVyOjFweCBzb2xpZCAjYTBhMGEwO3BhZGRpbmc6LjVyZW0gMS41cmVtO2JvcmRlci10b3A6MDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjNweDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czozcHh9YF1cbn0pXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgbWVzc2FnZTogTm90aWZpY2F0aW9uSXRlbTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvZ2dlcjogTG9nZ2VyU2VydmljZSwgcHJpdmF0ZSBub3RpZmljYXRpb25TZXJ2aWNlOiBOb3RpZmljYXRpb25TZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2UuZ2V0TWVzc2FnZSgpLnN1YnNjcmliZShtZXNzYWdlID0+IHtcbiAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgfSk7XG4gIH1cblxufVxuIl19
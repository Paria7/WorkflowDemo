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
var NotificationComponent = /** @class */ (function () {
    function NotificationComponent(logger, notificationService) {
        this.logger = logger;
        this.notificationService = notificationService;
    }
    /**
     * @return {?}
     */
    NotificationComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.notificationService.getMessage().subscribe(function (message) {
            _this.message = message;
        });
    };
    NotificationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bci-notification',
                    template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<div *ngIf=\"message\" class=\"notification-container\" [class.bg-danger]=\"message.type==='error'\">\n  <span *ngIf=\"message.type==='error'\" class=\"icon-problem icon\">&nbsp;</span>\n  {{message.text}}\n</div>\n",
                    styles: ["/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */.notification-container{position:absolute;left:50%;width:30em;-webkit-transform:translate(-50%);transform:translate(-50%);border:1px solid #a0a0a0;padding:.5rem 1.5rem;border-top:0;border-bottom-left-radius:3px;border-bottom-right-radius:3px}"]
                },] },
    ];
    /** @nocollapse */
    NotificationComponent.ctorParameters = function () { return [
        { type: LoggerService },
        { type: NotificationService }
    ]; };
    return NotificationComponent;
}());
export { NotificationComponent };
if (false) {
    /** @type {?} */
    NotificationComponent.prototype.message;
    /** @type {?} */
    NotificationComponent.prototype.logger;
    /** @type {?} */
    NotificationComponent.prototype.notificationService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BiY2kvbmctY29yZS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVsRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7SUFvQjNELCtCQUFvQixNQUFxQixFQUFVLG1CQUF3QztRQUF2RSxXQUFNLEdBQU4sTUFBTSxDQUFlO1FBQVUsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtLQUMxRjs7OztJQUVELHdDQUFROzs7SUFBUjtRQUFBLGlCQUlDO1FBSEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE9BQU87WUFDckQsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7U0FDeEIsQ0FBQyxDQUFDO0tBQ0o7O2dCQXpCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFLHlVQVFYO29CQUNDLE1BQU0sRUFBRSxDQUFDLDRWQUUyTyxDQUFDO2lCQUN0UDs7OztnQkFsQlEsYUFBYTtnQkFFYixtQkFBbUI7O2dDQVA1Qjs7U0F3QmEscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9nZ2VyU2VydmljZSB9IGZyb20gJy4uL2xvZ2dlci5zZXJ2aWNlJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbkl0ZW0gfSBmcm9tICcuL25vdGlmaWNhdGlvbi1pdGVtJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuL25vdGlmaWNhdGlvbi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmNpLW5vdGlmaWNhdGlvbicsXG4gIHRlbXBsYXRlOiBgPCEtLVxuICB+IENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgLS0+XG5cbjxkaXYgKm5nSWY9XCJtZXNzYWdlXCIgY2xhc3M9XCJub3RpZmljYXRpb24tY29udGFpbmVyXCIgW2NsYXNzLmJnLWRhbmdlcl09XCJtZXNzYWdlLnR5cGU9PT0nZXJyb3InXCI+XG4gIDxzcGFuICpuZ0lmPVwibWVzc2FnZS50eXBlPT09J2Vycm9yJ1wiIGNsYXNzPVwiaWNvbi1wcm9ibGVtIGljb25cIj4mbmJzcDs8L3NwYW4+XG4gIHt7bWVzc2FnZS50ZXh0fX1cbjwvZGl2PlxuYCxcbiAgc3R5bGVzOiBbYC8qIVxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovLm5vdGlmaWNhdGlvbi1jb250YWluZXJ7cG9zaXRpb246YWJzb2x1dGU7bGVmdDo1MCU7d2lkdGg6MzBlbTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlKTtib3JkZXI6MXB4IHNvbGlkICNhMGEwYTA7cGFkZGluZzouNXJlbSAxLjVyZW07Ym9yZGVyLXRvcDowO2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6M3B4O2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjNweH1gXVxufSlcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBtZXNzYWdlOiBOb3RpZmljYXRpb25JdGVtO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9nZ2VyOiBMb2dnZXJTZXJ2aWNlLCBwcml2YXRlIG5vdGlmaWNhdGlvblNlcnZpY2U6IE5vdGlmaWNhdGlvblNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5nZXRNZXNzYWdlKCkuc3Vic2NyaWJlKG1lc3NhZ2UgPT4ge1xuICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=
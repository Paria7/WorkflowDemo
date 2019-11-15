/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
import { Directive, Input } from '@angular/core';
import { CommandbarButtonComponent } from './button/commandbar-button.component';
var CommandbarButtonsDirective = /** @class */ (function () {
    function CommandbarButtonsDirective(host) {
        this.host = host;
    }
    Object.defineProperty(CommandbarButtonsDirective.prototype, "buttonAdd", {
        set: /**
         * @param {?} _
         * @return {?}
         */
        function (_) {
            this.setIcon('Bosch-Ic-add-outline');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CommandbarButtonsDirective.prototype, "buttonEdit", {
        set: /**
         * @param {?} _
         * @return {?}
         */
        function (_) {
            this.setIcon('Bosch-Ic-edit');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CommandbarButtonsDirective.prototype, "buttonDelete", {
        set: /**
         * @param {?} _
         * @return {?}
         */
        function (_) {
            this.setIcon('Bosch-Ic-delete');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CommandbarButtonsDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.host.icon = this.icon;
    };
    /**
     * @param {?} icon
     * @return {?}
     */
    CommandbarButtonsDirective.prototype.setIcon = /**
     * @param {?} icon
     * @return {?}
     */
    function (icon) {
        this.icon = icon;
    };
    CommandbarButtonsDirective.decorators = [
        { type: Directive, args: [{
                    selector: "[bciCommandbarActionAdd],[bciCommandbarActionEdit],[bciCommandbarActionDelete]",
                },] },
    ];
    /** @nocollapse */
    CommandbarButtonsDirective.ctorParameters = function () { return [
        { type: CommandbarButtonComponent }
    ]; };
    CommandbarButtonsDirective.propDecorators = {
        buttonAdd: [{ type: Input, args: ['bciCommandbarActionAdd',] }],
        buttonEdit: [{ type: Input, args: ['bciCommandbarActionEdit',] }],
        buttonDelete: [{ type: Input, args: ['bciCommandbarActionDelete',] }]
    };
    return CommandbarButtonsDirective;
}());
export { CommandbarButtonsDirective };
if (false) {
    /** @type {?} */
    CommandbarButtonsDirective.prototype.icon;
    /** @type {?} */
    CommandbarButtonsDirective.prototype.host;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZGJhci1idXR0b25zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BiY2kvbmctY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvY29tbWFuZGJhci9jb21tYW5kYmFyLWJ1dHRvbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7SUFTL0Usb0NBQW9CLElBQStCO1FBQS9CLFNBQUksR0FBSixJQUFJLENBQTJCO0tBQ2xEO0lBRUQsc0JBQ0ksaURBQVM7Ozs7O1FBRGIsVUFDYyxDQUFDO1lBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1NBQ3RDOzs7T0FBQTtJQUVELHNCQUNJLGtEQUFVOzs7OztRQURkLFVBQ2UsQ0FBQztZQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDL0I7OztPQUFBO0lBRUQsc0JBQ0ksb0RBQVk7Ozs7O1FBRGhCLFVBQ2lCLENBQUM7WUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQ2pDOzs7T0FBQTs7OztJQUVELDZDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7S0FDNUI7Ozs7O0lBRU8sNENBQU87Ozs7Y0FBQyxJQUFZO1FBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDOzs7Z0JBOUJwQixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdGQUFnRjtpQkFDM0Y7Ozs7Z0JBSlEseUJBQXlCOzs7NEJBWS9CLEtBQUssU0FBQyx3QkFBd0I7NkJBSzlCLEtBQUssU0FBQyx5QkFBeUI7K0JBSy9CLEtBQUssU0FBQywyQkFBMkI7O3FDQTNCcEM7O1NBVWEsMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1hbmRiYXJCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2J1dHRvbi9jb21tYW5kYmFyLWJ1dHRvbi5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IGBbYmNpQ29tbWFuZGJhckFjdGlvbkFkZF0sW2JjaUNvbW1hbmRiYXJBY3Rpb25FZGl0XSxbYmNpQ29tbWFuZGJhckFjdGlvbkRlbGV0ZV1gLFxufSlcbmV4cG9ydCBjbGFzcyBDb21tYW5kYmFyQnV0dG9uc0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHJpdmF0ZSBpY29uOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBob3N0OiBDb21tYW5kYmFyQnV0dG9uQ29tcG9uZW50KSB7XG4gIH1cblxuICBASW5wdXQoJ2JjaUNvbW1hbmRiYXJBY3Rpb25BZGQnKVxuICBzZXQgYnV0dG9uQWRkKF8pIHtcbiAgICB0aGlzLnNldEljb24oJ0Jvc2NoLUljLWFkZC1vdXRsaW5lJyk7XG4gIH1cblxuICBASW5wdXQoJ2JjaUNvbW1hbmRiYXJBY3Rpb25FZGl0JylcbiAgc2V0IGJ1dHRvbkVkaXQoXykge1xuICAgIHRoaXMuc2V0SWNvbignQm9zY2gtSWMtZWRpdCcpO1xuICB9XG5cbiAgQElucHV0KCdiY2lDb21tYW5kYmFyQWN0aW9uRGVsZXRlJylcbiAgc2V0IGJ1dHRvbkRlbGV0ZShfKSB7XG4gICAgdGhpcy5zZXRJY29uKCdCb3NjaC1JYy1kZWxldGUnKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaG9zdC5pY29uID0gdGhpcy5pY29uO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRJY29uKGljb246IHN0cmluZykge1xuICAgIHRoaXMuaWNvbiA9IGljb247XG4gIH1cbn1cbiJdfQ==
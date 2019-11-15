/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
import { Directive, Input } from '@angular/core';
import { CommandbarButtonComponent } from './button/commandbar-button.component';
export class CommandbarButtonsDirective {
    /**
     * @param {?} host
     */
    constructor(host) {
        this.host = host;
    }
    /**
     * @param {?} _
     * @return {?}
     */
    set buttonAdd(_) {
        this.setIcon('Bosch-Ic-add-outline');
    }
    /**
     * @param {?} _
     * @return {?}
     */
    set buttonEdit(_) {
        this.setIcon('Bosch-Ic-edit');
    }
    /**
     * @param {?} _
     * @return {?}
     */
    set buttonDelete(_) {
        this.setIcon('Bosch-Ic-delete');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.host.icon = this.icon;
    }
    /**
     * @param {?} icon
     * @return {?}
     */
    setIcon(icon) {
        this.icon = icon;
    }
}
CommandbarButtonsDirective.decorators = [
    { type: Directive, args: [{
                selector: `[bciCommandbarActionAdd],[bciCommandbarActionEdit],[bciCommandbarActionDelete]`,
            },] },
];
/** @nocollapse */
CommandbarButtonsDirective.ctorParameters = () => [
    { type: CommandbarButtonComponent }
];
CommandbarButtonsDirective.propDecorators = {
    buttonAdd: [{ type: Input, args: ['bciCommandbarActionAdd',] }],
    buttonEdit: [{ type: Input, args: ['bciCommandbarActionEdit',] }],
    buttonDelete: [{ type: Input, args: ['bciCommandbarActionDelete',] }]
};
if (false) {
    /** @type {?} */
    CommandbarButtonsDirective.prototype.icon;
    /** @type {?} */
    CommandbarButtonsDirective.prototype.host;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZGJhci1idXR0b25zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BiY2kvbmctY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvY29tbWFuZGJhci9jb21tYW5kYmFyLWJ1dHRvbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUtqRixNQUFNOzs7O0lBSUosWUFBb0IsSUFBK0I7UUFBL0IsU0FBSSxHQUFKLElBQUksQ0FBMkI7S0FDbEQ7Ozs7O0lBRUQsSUFDSSxTQUFTLENBQUMsQ0FBQztRQUNiLElBQUksQ0FBQyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztLQUN0Qzs7Ozs7SUFFRCxJQUNJLFVBQVUsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztLQUMvQjs7Ozs7SUFFRCxJQUNJLFlBQVksQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztLQUNqQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0tBQzVCOzs7OztJQUVPLE9BQU8sQ0FBQyxJQUFZO1FBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDOzs7O1lBOUJwQixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdGQUFnRjthQUMzRjs7OztZQUpRLHlCQUF5Qjs7O3dCQVkvQixLQUFLLFNBQUMsd0JBQXdCO3lCQUs5QixLQUFLLFNBQUMseUJBQXlCOzJCQUsvQixLQUFLLFNBQUMsMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1hbmRiYXJCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2J1dHRvbi9jb21tYW5kYmFyLWJ1dHRvbi5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IGBbYmNpQ29tbWFuZGJhckFjdGlvbkFkZF0sW2JjaUNvbW1hbmRiYXJBY3Rpb25FZGl0XSxbYmNpQ29tbWFuZGJhckFjdGlvbkRlbGV0ZV1gLFxufSlcbmV4cG9ydCBjbGFzcyBDb21tYW5kYmFyQnV0dG9uc0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHJpdmF0ZSBpY29uOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBob3N0OiBDb21tYW5kYmFyQnV0dG9uQ29tcG9uZW50KSB7XG4gIH1cblxuICBASW5wdXQoJ2JjaUNvbW1hbmRiYXJBY3Rpb25BZGQnKVxuICBzZXQgYnV0dG9uQWRkKF8pIHtcbiAgICB0aGlzLnNldEljb24oJ0Jvc2NoLUljLWFkZC1vdXRsaW5lJyk7XG4gIH1cblxuICBASW5wdXQoJ2JjaUNvbW1hbmRiYXJBY3Rpb25FZGl0JylcbiAgc2V0IGJ1dHRvbkVkaXQoXykge1xuICAgIHRoaXMuc2V0SWNvbignQm9zY2gtSWMtZWRpdCcpO1xuICB9XG5cbiAgQElucHV0KCdiY2lDb21tYW5kYmFyQWN0aW9uRGVsZXRlJylcbiAgc2V0IGJ1dHRvbkRlbGV0ZShfKSB7XG4gICAgdGhpcy5zZXRJY29uKCdCb3NjaC1JYy1kZWxldGUnKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaG9zdC5pY29uID0gdGhpcy5pY29uO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRJY29uKGljb246IHN0cmluZykge1xuICAgIHRoaXMuaWNvbiA9IGljb247XG4gIH1cbn1cbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
import { Component, Input } from '@angular/core';
export class BciSidebarExpanderComponent {
    constructor() {
        this.header = '';
        this.expanded = false;
    }
    /**
     * @return {?}
     */
    toggleSidebar() {
        this.expanded = !this.expanded;
    }
}
BciSidebarExpanderComponent.decorators = [
    { type: Component, args: [{
                selector: 'bci-sidebar-expander',
                template: `<!--
  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
  -->

<div class="module-container">
  <div class="header-container" (click)="toggleSidebar()">
    {{header}}
    <i class="expander-icon" [ngClass]="{'expanded': expanded}"></i>
  </div>
  <div class="content-container" [ngClass]="{'expanded': expanded}">
    <ng-content></ng-content>
  </div>
</div>
`,
                styles: [`@charset "UTF-8";/*!
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */.header-container{padding:0 16px;display:inline-block;width:100%;line-height:48px;transition:all .2s ease;color:#fff;cursor:hand;font-family:Bosch-Sans;font-weight:300;font-size:16px;border-width:0 0 0 4px;border-color:transparent;border-style:solid;border-radius:0}.header-container:hover{background-color:rgba(0,0,0,.05);color:#bfc0c2}.header-container .expander-icon{position:absolute;right:16px;transition:-webkit-transform .2s ease-out;transition:transform .2s ease-out;transition:transform .2s ease-out,-webkit-transform .2s ease-out}.header-container .expander-icon:before{font-family:Bosch-Ic;content:"";font-style:normal;font-size:20px}.header-container .expander-icon.expanded{display:inline-block;transition:-webkit-transform .2s ease-in;transition:transform .2s ease-in;transition:transform .2s ease-in,-webkit-transform .2s ease-in;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.content-container{max-height:0;overflow:hidden;transition:max-height .2s ease-out}.content-container.expanded{max-height:2000px;transition:max-height .6s ease-in}`]
            },] },
];
BciSidebarExpanderComponent.propDecorators = {
    header: [{ type: Input }],
    expanded: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    BciSidebarExpanderComponent.prototype.header;
    /** @type {?} */
    BciSidebarExpanderComponent.prototype.expanded;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmNpLXNpZGViYXItZXhwYW5kZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGJjaS9uZy1jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvcmUvbGF5b3V0L2JjaS1zaWRlYmFyLWV4cGFuZGVyL2JjaS1zaWRlYmFyLWV4cGFuZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFzQmpELE1BQU07O3NCQUVjLEVBQUU7d0JBQ0EsS0FBSzs7Ozs7SUFFekIsYUFBYTtRQUNYLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0tBQ2hDOzs7WUEzQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7OztDQWFYO2dCQUNDLE1BQU0sRUFBRSxDQUFDOzs2aUNBRWtpQyxDQUFDO2FBQzdpQzs7O3FCQUdFLEtBQUs7dUJBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiY2ktc2lkZWJhci1leHBhbmRlcicsXG4gIHRlbXBsYXRlOiBgPCEtLVxuICB+IENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgLS0+XG5cbjxkaXYgY2xhc3M9XCJtb2R1bGUtY29udGFpbmVyXCI+XG4gIDxkaXYgY2xhc3M9XCJoZWFkZXItY29udGFpbmVyXCIgKGNsaWNrKT1cInRvZ2dsZVNpZGViYXIoKVwiPlxuICAgIHt7aGVhZGVyfX1cbiAgICA8aSBjbGFzcz1cImV4cGFuZGVyLWljb25cIiBbbmdDbGFzc109XCJ7J2V4cGFuZGVkJzogZXhwYW5kZWR9XCI+PC9pPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImNvbnRlbnQtY29udGFpbmVyXCIgW25nQ2xhc3NdPVwieydleHBhbmRlZCc6IGV4cGFuZGVkfVwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9kaXY+XG48L2Rpdj5cbmAsXG4gIHN0eWxlczogW2BAY2hhcnNldCBcIlVURi04XCI7LyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi8uaGVhZGVyLWNvbnRhaW5lcntwYWRkaW5nOjAgMTZweDtkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDoxMDAlO2xpbmUtaGVpZ2h0OjQ4cHg7dHJhbnNpdGlvbjphbGwgLjJzIGVhc2U7Y29sb3I6I2ZmZjtjdXJzb3I6aGFuZDtmb250LWZhbWlseTpCb3NjaC1TYW5zO2ZvbnQtd2VpZ2h0OjMwMDtmb250LXNpemU6MTZweDtib3JkZXItd2lkdGg6MCAwIDAgNHB4O2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLXJhZGl1czowfS5oZWFkZXItY29udGFpbmVyOmhvdmVye2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMDUpO2NvbG9yOiNiZmMwYzJ9LmhlYWRlci1jb250YWluZXIgLmV4cGFuZGVyLWljb257cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MTZweDt0cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIC4ycyBlYXNlLW91dDt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMnMgZWFzZS1vdXQ7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjJzIGVhc2Utb3V0LC13ZWJraXQtdHJhbnNmb3JtIC4ycyBlYXNlLW91dH0uaGVhZGVyLWNvbnRhaW5lciAuZXhwYW5kZXItaWNvbjpiZWZvcmV7Zm9udC1mYW1pbHk6Qm9zY2gtSWM7Y29udGVudDpcIu+EnVwiO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtc2l6ZToyMHB4fS5oZWFkZXItY29udGFpbmVyIC5leHBhbmRlci1pY29uLmV4cGFuZGVke2Rpc3BsYXk6aW5saW5lLWJsb2NrO3RyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gLjJzIGVhc2UtaW47dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjJzIGVhc2UtaW47dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjJzIGVhc2UtaW4sLXdlYmtpdC10cmFuc2Zvcm0gLjJzIGVhc2UtaW47LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDkwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDkwZGVnKX0uY29udGVudC1jb250YWluZXJ7bWF4LWhlaWdodDowO292ZXJmbG93OmhpZGRlbjt0cmFuc2l0aW9uOm1heC1oZWlnaHQgLjJzIGVhc2Utb3V0fS5jb250ZW50LWNvbnRhaW5lci5leHBhbmRlZHttYXgtaGVpZ2h0OjIwMDBweDt0cmFuc2l0aW9uOm1heC1oZWlnaHQgLjZzIGVhc2UtaW59YF1cbn0pXG5leHBvcnQgY2xhc3MgQmNpU2lkZWJhckV4cGFuZGVyQ29tcG9uZW50IHtcblxuICBASW5wdXQoKSBoZWFkZXIgPSAnJztcbiAgQElucHV0KCkgZXhwYW5kZWQgPSBmYWxzZTtcblxuICB0b2dnbGVTaWRlYmFyKCkge1xuICAgIHRoaXMuZXhwYW5kZWQgPSAhdGhpcy5leHBhbmRlZDtcbiAgfVxufVxuIl19
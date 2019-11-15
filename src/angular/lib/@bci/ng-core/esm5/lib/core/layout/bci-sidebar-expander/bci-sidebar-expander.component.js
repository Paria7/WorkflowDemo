/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
import { Component, Input } from '@angular/core';
var BciSidebarExpanderComponent = /** @class */ (function () {
    function BciSidebarExpanderComponent() {
        this.header = '';
        this.expanded = false;
    }
    /**
     * @return {?}
     */
    BciSidebarExpanderComponent.prototype.toggleSidebar = /**
     * @return {?}
     */
    function () {
        this.expanded = !this.expanded;
    };
    BciSidebarExpanderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bci-sidebar-expander',
                    template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<div class=\"module-container\">\n  <div class=\"header-container\" (click)=\"toggleSidebar()\">\n    {{header}}\n    <i class=\"expander-icon\" [ngClass]=\"{'expanded': expanded}\"></i>\n  </div>\n  <div class=\"content-container\" [ngClass]=\"{'expanded': expanded}\">\n    <ng-content></ng-content>\n  </div>\n</div>\n",
                    styles: ["@charset \"UTF-8\";/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */.header-container{padding:0 16px;display:inline-block;width:100%;line-height:48px;transition:all .2s ease;color:#fff;cursor:hand;font-family:Bosch-Sans;font-weight:300;font-size:16px;border-width:0 0 0 4px;border-color:transparent;border-style:solid;border-radius:0}.header-container:hover{background-color:rgba(0,0,0,.05);color:#bfc0c2}.header-container .expander-icon{position:absolute;right:16px;transition:-webkit-transform .2s ease-out;transition:transform .2s ease-out;transition:transform .2s ease-out,-webkit-transform .2s ease-out}.header-container .expander-icon:before{font-family:Bosch-Ic;content:\"\uF11D\";font-style:normal;font-size:20px}.header-container .expander-icon.expanded{display:inline-block;transition:-webkit-transform .2s ease-in;transition:transform .2s ease-in;transition:transform .2s ease-in,-webkit-transform .2s ease-in;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.content-container{max-height:0;overflow:hidden;transition:max-height .2s ease-out}.content-container.expanded{max-height:2000px;transition:max-height .6s ease-in}"]
                },] },
    ];
    BciSidebarExpanderComponent.propDecorators = {
        header: [{ type: Input }],
        expanded: [{ type: Input }]
    };
    return BciSidebarExpanderComponent;
}());
export { BciSidebarExpanderComponent };
if (false) {
    /** @type {?} */
    BciSidebarExpanderComponent.prototype.header;
    /** @type {?} */
    BciSidebarExpanderComponent.prototype.expanded;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmNpLXNpZGViYXItZXhwYW5kZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGJjaS9uZy1jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvcmUvbGF5b3V0L2JjaS1zaWRlYmFyLWV4cGFuZGVyL2JjaS1zaWRlYmFyLWV4cGFuZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7OztzQkF3QjdCLEVBQUU7d0JBQ0EsS0FBSzs7Ozs7SUFFekIsbURBQWE7OztJQUFiO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7S0FDaEM7O2dCQTNCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsUUFBUSxFQUFFLG1iQWFYO29CQUNDLE1BQU0sRUFBRSxDQUFDLDZxQ0FFa2lDLENBQUM7aUJBQzdpQzs7O3lCQUdFLEtBQUs7MkJBQ0wsS0FBSzs7c0NBN0JSOztTQTBCYSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmNpLXNpZGViYXItZXhwYW5kZXInLFxuICB0ZW1wbGF0ZTogYDwhLS1cbiAgfiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gIC0tPlxuXG48ZGl2IGNsYXNzPVwibW9kdWxlLWNvbnRhaW5lclwiPlxuICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWNvbnRhaW5lclwiIChjbGljayk9XCJ0b2dnbGVTaWRlYmFyKClcIj5cbiAgICB7e2hlYWRlcn19XG4gICAgPGkgY2xhc3M9XCJleHBhbmRlci1pY29uXCIgW25nQ2xhc3NdPVwieydleHBhbmRlZCc6IGV4cGFuZGVkfVwiPjwvaT5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJjb250ZW50LWNvbnRhaW5lclwiIFtuZ0NsYXNzXT1cInsnZXhwYW5kZWQnOiBleHBhbmRlZH1cIj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvZGl2PlxuPC9kaXY+XG5gLFxuICBzdHlsZXM6IFtgQGNoYXJzZXQgXCJVVEYtOFwiOy8qIVxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovLmhlYWRlci1jb250YWluZXJ7cGFkZGluZzowIDE2cHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MTAwJTtsaW5lLWhlaWdodDo0OHB4O3RyYW5zaXRpb246YWxsIC4ycyBlYXNlO2NvbG9yOiNmZmY7Y3Vyc29yOmhhbmQ7Zm9udC1mYW1pbHk6Qm9zY2gtU2Fucztmb250LXdlaWdodDozMDA7Zm9udC1zaXplOjE2cHg7Ym9yZGVyLXdpZHRoOjAgMCAwIDRweDtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1yYWRpdXM6MH0uaGVhZGVyLWNvbnRhaW5lcjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjA1KTtjb2xvcjojYmZjMGMyfS5oZWFkZXItY29udGFpbmVyIC5leHBhbmRlci1pY29ue3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjE2cHg7dHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAuMnMgZWFzZS1vdXQ7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjJzIGVhc2Utb3V0O3RyYW5zaXRpb246dHJhbnNmb3JtIC4ycyBlYXNlLW91dCwtd2Via2l0LXRyYW5zZm9ybSAuMnMgZWFzZS1vdXR9LmhlYWRlci1jb250YWluZXIgLmV4cGFuZGVyLWljb246YmVmb3Jle2ZvbnQtZmFtaWx5OkJvc2NoLUljO2NvbnRlbnQ6XCLvhJ1cIjtmb250LXN0eWxlOm5vcm1hbDtmb250LXNpemU6MjBweH0uaGVhZGVyLWNvbnRhaW5lciAuZXhwYW5kZXItaWNvbi5leHBhbmRlZHtkaXNwbGF5OmlubGluZS1ibG9jazt0cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIC4ycyBlYXNlLWluO3RyYW5zaXRpb246dHJhbnNmb3JtIC4ycyBlYXNlLWluO3RyYW5zaXRpb246dHJhbnNmb3JtIC4ycyBlYXNlLWluLC13ZWJraXQtdHJhbnNmb3JtIC4ycyBlYXNlLWluOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyl9LmNvbnRlbnQtY29udGFpbmVye21heC1oZWlnaHQ6MDtvdmVyZmxvdzpoaWRkZW47dHJhbnNpdGlvbjptYXgtaGVpZ2h0IC4ycyBlYXNlLW91dH0uY29udGVudC1jb250YWluZXIuZXhwYW5kZWR7bWF4LWhlaWdodDoyMDAwcHg7dHJhbnNpdGlvbjptYXgtaGVpZ2h0IC42cyBlYXNlLWlufWBdXG59KVxuZXhwb3J0IGNsYXNzIEJjaVNpZGViYXJFeHBhbmRlckNvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgaGVhZGVyID0gJyc7XG4gIEBJbnB1dCgpIGV4cGFuZGVkID0gZmFsc2U7XG5cbiAgdG9nZ2xlU2lkZWJhcigpIHtcbiAgICB0aGlzLmV4cGFuZGVkID0gIXRoaXMuZXhwYW5kZWQ7XG4gIH1cbn1cbiJdfQ==
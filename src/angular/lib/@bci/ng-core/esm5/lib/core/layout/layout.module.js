/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BciHeaderComponent } from './bci-header/bci-header.component';
import { BciContentComponent } from './bci-content/bci-content.component';
import { BciFooterComponent } from './bci-footer/bci-footer.component';
import { BciSidebarComponent } from './bci-sidebar/bci-sidebar.component';
import { BciSidebarFooterComponent } from './bci-sidebar-footer/bci-sidebar-footer.component';
import { BciSidebarExpanderComponent } from './bci-sidebar-expander/bci-sidebar-expander.component';
import { BciLoaderComponent } from './bci-loader/bci-loader.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BciSidebarNavItemComponent } from './bci-sidebar-nav-item/bci-sidebar-nav-item.component';
import { BciSidebarNavListComponent } from './bci-sidebar-nav-list/bci-sidebar-nav-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { BreadcrumbsModule } from '../../shared/breadcrumbs/breadcrumbs.module';
import { BciAppComponent } from './bci-app/bci-app.component';
var BciLayoutModule = /** @class */ (function () {
    function BciLayoutModule() {
    }
    BciLayoutModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        RouterModule,
                        FlexLayoutModule,
                        BreadcrumbsModule,
                        MatSidenavModule,
                        MatExpansionModule,
                        MatIconModule,
                        MatListModule,
                        OverlayModule,
                        PortalModule
                    ],
                    declarations: [
                        BciHeaderComponent,
                        BciContentComponent,
                        BciFooterComponent,
                        BciSidebarComponent,
                        BciSidebarFooterComponent,
                        BciSidebarExpanderComponent,
                        BciLoaderComponent,
                        BciSidebarNavItemComponent,
                        BciSidebarNavListComponent,
                        BciAppComponent
                    ],
                    exports: [
                        BciHeaderComponent,
                        BciContentComponent,
                        BciFooterComponent,
                        BciSidebarComponent,
                        BciSidebarFooterComponent,
                        BciSidebarExpanderComponent,
                        BciLoaderComponent,
                        BciSidebarNavItemComponent,
                        BciSidebarNavListComponent,
                        BciAppComponent,
                        OverlayModule,
                        PortalModule
                    ]
                },] },
    ];
    return BciLayoutModule;
}());
export { BciLayoutModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BiY2kvbmctY29yZS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL2xheW91dC9sYXlvdXQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDOUYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDcEcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdkUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDakUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUNuRyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUNuRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7Z0JBRTdELFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixZQUFZO3dCQUNaLGdCQUFnQjt3QkFDaEIsaUJBQWlCO3dCQUVqQixnQkFBZ0I7d0JBQ2hCLGtCQUFrQjt3QkFDbEIsYUFBYTt3QkFDYixhQUFhO3dCQUViLGFBQWE7d0JBQ2IsWUFBWTtxQkFDYjtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osa0JBQWtCO3dCQUNsQixtQkFBbUI7d0JBQ25CLGtCQUFrQjt3QkFDbEIsbUJBQW1CO3dCQUNuQix5QkFBeUI7d0JBQ3pCLDJCQUEyQjt3QkFDM0Isa0JBQWtCO3dCQUNsQiwwQkFBMEI7d0JBQzFCLDBCQUEwQjt3QkFDMUIsZUFBZTtxQkFDaEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGtCQUFrQjt3QkFDbEIsbUJBQW1CO3dCQUNuQixrQkFBa0I7d0JBQ2xCLG1CQUFtQjt3QkFDbkIseUJBQXlCO3dCQUN6QiwyQkFBMkI7d0JBQzNCLGtCQUFrQjt3QkFDbEIsMEJBQTBCO3dCQUMxQiwwQkFBMEI7d0JBQzFCLGVBQWU7d0JBRWYsYUFBYTt3QkFDYixZQUFZO3FCQUNiO2lCQUNGOzswQkFyRUQ7O1NBc0VhLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQmNpSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9iY2ktaGVhZGVyL2JjaS1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEJjaUNvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL2JjaS1jb250ZW50L2JjaS1jb250ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCY2lGb290ZXJDb21wb25lbnQgfSBmcm9tICcuL2JjaS1mb290ZXIvYmNpLWZvb3Rlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQmNpU2lkZWJhckNvbXBvbmVudCB9IGZyb20gJy4vYmNpLXNpZGViYXIvYmNpLXNpZGViYXIuY29tcG9uZW50JztcbmltcG9ydCB7IEJjaVNpZGViYXJGb290ZXJDb21wb25lbnQgfSBmcm9tICcuL2JjaS1zaWRlYmFyLWZvb3Rlci9iY2ktc2lkZWJhci1mb290ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEJjaVNpZGViYXJFeHBhbmRlckNvbXBvbmVudCB9IGZyb20gJy4vYmNpLXNpZGViYXItZXhwYW5kZXIvYmNpLXNpZGViYXItZXhwYW5kZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEJjaUxvYWRlckNvbXBvbmVudCB9IGZyb20gJy4vYmNpLWxvYWRlci9iY2ktbG9hZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXRFeHBhbnNpb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9leHBhbnNpb24nO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgTWF0TGlzdE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xpc3QnO1xuaW1wb3J0IHsgTWF0U2lkZW5hdk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NpZGVuYXYnO1xuaW1wb3J0IHsgQmNpU2lkZWJhck5hdkl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2JjaS1zaWRlYmFyLW5hdi1pdGVtL2JjaS1zaWRlYmFyLW5hdi1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCY2lTaWRlYmFyTmF2TGlzdENvbXBvbmVudCB9IGZyb20gJy4vYmNpLXNpZGViYXItbmF2LWxpc3QvYmNpLXNpZGViYXItbmF2LWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IEZsZXhMYXlvdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mbGV4LWxheW91dCc7XG5pbXBvcnQgeyBPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgUG9ydGFsTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBCcmVhZGNydW1ic01vZHVsZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9icmVhZGNydW1icy9icmVhZGNydW1icy5tb2R1bGUnO1xuaW1wb3J0IHsgQmNpQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9iY2ktYXBwL2JjaS1hcHAuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgRmxleExheW91dE1vZHVsZSxcbiAgICBCcmVhZGNydW1ic01vZHVsZSxcbiAgICAvKiBBbmd1bGFyIE1hdGVyaWFsICovXG4gICAgTWF0U2lkZW5hdk1vZHVsZSxcbiAgICBNYXRFeHBhbnNpb25Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRMaXN0TW9kdWxlLFxuICAgIC8qIENESyAqL1xuICAgIE92ZXJsYXlNb2R1bGUsXG4gICAgUG9ydGFsTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEJjaUhlYWRlckNvbXBvbmVudCxcbiAgICBCY2lDb250ZW50Q29tcG9uZW50LFxuICAgIEJjaUZvb3RlckNvbXBvbmVudCxcbiAgICBCY2lTaWRlYmFyQ29tcG9uZW50LFxuICAgIEJjaVNpZGViYXJGb290ZXJDb21wb25lbnQsXG4gICAgQmNpU2lkZWJhckV4cGFuZGVyQ29tcG9uZW50LFxuICAgIEJjaUxvYWRlckNvbXBvbmVudCxcbiAgICBCY2lTaWRlYmFyTmF2SXRlbUNvbXBvbmVudCxcbiAgICBCY2lTaWRlYmFyTmF2TGlzdENvbXBvbmVudCxcbiAgICBCY2lBcHBDb21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEJjaUhlYWRlckNvbXBvbmVudCxcbiAgICBCY2lDb250ZW50Q29tcG9uZW50LFxuICAgIEJjaUZvb3RlckNvbXBvbmVudCxcbiAgICBCY2lTaWRlYmFyQ29tcG9uZW50LFxuICAgIEJjaVNpZGViYXJGb290ZXJDb21wb25lbnQsXG4gICAgQmNpU2lkZWJhckV4cGFuZGVyQ29tcG9uZW50LFxuICAgIEJjaUxvYWRlckNvbXBvbmVudCxcbiAgICBCY2lTaWRlYmFyTmF2SXRlbUNvbXBvbmVudCxcbiAgICBCY2lTaWRlYmFyTmF2TGlzdENvbXBvbmVudCxcbiAgICBCY2lBcHBDb21wb25lbnQsXG4gICAgLyogQ0RLICovXG4gICAgT3ZlcmxheU1vZHVsZSxcbiAgICBQb3J0YWxNb2R1bGVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBCY2lMYXlvdXRNb2R1bGUge1xufVxuIl19
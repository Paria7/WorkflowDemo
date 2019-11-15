/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { FilterPanelComponent } from './filter-panel/filter-panel.component';
import { SidePanelItemComponent } from './side-panel-item/side-panel-item.component';
import { ContentWSidePanelComponent } from './content-w-side-panel/content-w-side-panel.component';
import { LoadingSpinnerDirective } from './loading-spinner/loading-spinner.directive';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule, MatChipsModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatSidenavModule, MatSnackBarModule, MatToolbarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BciTileComponent } from './tile/tile.component';
import { ContentSidebarComponent } from './content-sidebar/content-sidebar.component';
import { ContentSidebarItemComponent } from './content-sidebar-item/content-sidebar-item.component';
import { CommandbarComponent } from './commandbar/commandbar.component';
import { CommandbarActionsComponent } from './commandbar/actions/actions.component';
import { CommandbarButtonComponent } from './commandbar/button/commandbar-button.component';
import { CommandbarButtonsDirective } from './commandbar/commandbar-buttons.component';
import { CommandbarItemComponent } from './commandbar/item/commandbar-item.component';
import { CommandbarInlinefiltersComponent } from './commandbar/inlinefilters/commandbar-inlinefilters.component';
import { CommandbarInlinefilterComponent } from './commandbar/inlinefilter/commandbar-inlinefilter.component';
import { CommandbarQuickfiltersDirective } from './commandbar/commandbar-quickfilters.directive';
import { ToggleButtonDirective } from './commandbar/toggle-button.directive';
import { CommandbarActiveFiltersComponent } from './commandbar/active-filters/active-filters.component';
import { BciChipComponent } from './chip/chip.component';
import { DetailViewComponent } from './master-detail/detail/detail-view.component';
import { MasterDetailViewComponent } from './master-detail/master-detail-view.component';
import { MasterViewComponent } from './master-detail/master/master-view.component';
import { FilterPickerComponent } from './filter-picker/filter-picker.component';
import { FilterEntryComponent } from './filter-picker/filter-entry/filter-entry.component';
import { PageContentComponent } from './page-content/page-content.component';
import { BreadcrumbsModule } from './breadcrumbs/breadcrumbs.module';
export class BciSharedModule {
}
BciSharedModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    FlexLayoutModule,
                    BreadcrumbsModule,
                    MatCardModule,
                    MatChipsModule,
                    MatButtonModule,
                    MatSidenavModule,
                    MatToolbarModule,
                    MatFormFieldModule,
                    MatIconModule,
                    MatInputModule,
                    MatMenuModule,
                    MatSnackBarModule,
                    MatDialogModule,
                    MatListModule
                ],
                declarations: [
                    FilterPanelComponent,
                    SidePanelComponent,
                    SidePanelItemComponent,
                    ContentSidebarComponent,
                    ContentSidebarItemComponent,
                    ContentWSidePanelComponent,
                    LoadingSpinnerDirective,
                    BciChipComponent,
                    BciTileComponent,
                    CommandbarItemComponent,
                    CommandbarButtonComponent,
                    CommandbarButtonsDirective,
                    CommandbarComponent,
                    CommandbarActionsComponent,
                    CommandbarComponent,
                    CommandbarInlinefiltersComponent,
                    CommandbarInlinefilterComponent,
                    CommandbarQuickfiltersDirective,
                    ToggleButtonDirective,
                    CommandbarActiveFiltersComponent,
                    MasterDetailViewComponent,
                    MasterViewComponent,
                    DetailViewComponent,
                    FilterPickerComponent,
                    FilterEntryComponent,
                    PageContentComponent
                ],
                exports: [
                    CommonModule,
                    FormsModule,
                    BreadcrumbsModule,
                    FilterPanelComponent,
                    SidePanelComponent,
                    SidePanelItemComponent,
                    ContentSidebarComponent,
                    ContentSidebarItemComponent,
                    ContentWSidePanelComponent,
                    LoadingSpinnerDirective,
                    BciTileComponent,
                    MasterDetailViewComponent,
                    MasterViewComponent,
                    DetailViewComponent,
                    BciChipComponent,
                    CommandbarItemComponent,
                    CommandbarButtonComponent,
                    CommandbarButtonsDirective,
                    CommandbarComponent,
                    CommandbarActionsComponent,
                    CommandbarComponent,
                    CommandbarInlinefiltersComponent,
                    CommandbarInlinefilterComponent,
                    CommandbarQuickfiltersDirective,
                    ToggleButtonDirective,
                    CommandbarActiveFiltersComponent,
                    FilterPickerComponent,
                    FilterEntryComponent,
                    PageContentComponent,
                    MatCardModule,
                    MatButtonModule,
                    MatSidenavModule,
                ]
            },] },
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BiY2kvbmctY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ25HLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDN04sT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDekQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDdEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDcEcsT0FBTyxFQUFFLG1C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Q3JCLGdDQUFnQztvQkFDaEMscUJBQXFCO29CQUNyQixvQkFBb0I7b0JBQ3BCLG9CQUFvQjtvQkFFcEIsYUFBYTtvQkFDYixlQUFlO29CQUNmLGdCQUFnQjtpQkFDakI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFNpZGVQYW5lbENvbXBvbmVudCB9IGZyb20gJy4vc2lkZS1wYW5lbC9zaWRlLXBhbmVsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaWx0ZXJQYW5lbENvbXBvbmVudCB9IGZyb20gJy4vZmlsdGVyLXBhbmVsL2ZpbHRlci1wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2lkZVBhbmVsSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vc2lkZS1wYW5lbC1pdGVtL3NpZGUtcGFuZWwtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udGVudFdTaWRlUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL2NvbnRlbnQtdy1zaWRlLXBhbmVsL2NvbnRlbnQtdy1zaWRlLXBhbmVsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2FkaW5nU3Bpbm5lckRpcmVjdGl2ZSB9IGZyb20gJy4vbG9hZGluZy1zcGlubmVyL2xvYWRpbmctc3Bpbm5lci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTWF0Q2FyZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NhcmQnO1xuXG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUsIE1hdENoaXBzTW9kdWxlLCBNYXREaWFsb2dNb2R1bGUsIE1hdEZvcm1GaWVsZE1vZHVsZSwgTWF0SWNvbk1vZHVsZSwgTWF0SW5wdXRNb2R1bGUsIE1hdExpc3RNb2R1bGUsIE1hdE1lbnVNb2R1bGUsIE1hdFNpZGVuYXZNb2R1bGUsIE1hdFNuYWNrQmFyTW9kdWxlLCBNYXRUb29sYmFyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2ZsZXgtbGF5b3V0JztcbmltcG9ydCB7IEJjaVRpbGVDb21wb25lbnQgfSBmcm9tICcuL3RpbGUvdGlsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udGVudFNpZGViYXJDb21wb25lbnQgfSBmcm9tICcuL2NvbnRlbnQtc2lkZWJhci9jb250ZW50LXNpZGViYXIuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRlbnRTaWRlYmFySXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY29udGVudC1zaWRlYmFyLWl0ZW0vY29udGVudC1zaWRlYmFyLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IENvbW1hbmRiYXJDb21wb25lbnQgfSBmcm9tICcuL2NvbW1hbmRiYXIvY29tbWFuZGJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tbWFuZGJhckFjdGlvbnNDb21wb25lbnQgfSBmcm9tICcuL2NvbW1hbmRiYXIvYWN0aW9ucy9hY3Rpb25zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21tYW5kYmFyQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21tYW5kYmFyL2J1dHRvbi9jb21tYW5kYmFyLWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tbWFuZGJhckJ1dHRvbnNEaXJlY3RpdmUgfSBmcm9tICcuL2NvbW1hbmRiYXIvY29tbWFuZGJhci1idXR0b25zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21tYW5kYmFySXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY29tbWFuZGJhci9pdGVtL2NvbW1hbmRiYXItaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tbWFuZGJhcklubGluZWZpbHRlcnNDb21wb25lbnQgfSBmcm9tICcuL2NvbW1hbmRiYXIvaW5saW5lZmlsdGVycy9jb21tYW5kYmFyLWlubGluZWZpbHRlcnMuY29tcG9uZW50JztcbmltcG9ydCB7IENvbW1hbmRiYXJJbmxpbmVmaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbW1hbmRiYXIvaW5saW5lZmlsdGVyL2NvbW1hbmRiYXItaW5saW5lZmlsdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21tYW5kYmFyUXVpY2tmaWx0ZXJzRGlyZWN0aXZlIH0gZnJvbSAnLi9jb21tYW5kYmFyL2NvbW1hbmRiYXItcXVpY2tmaWx0ZXJzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUb2dnbGVCdXR0b25EaXJlY3RpdmUgfSBmcm9tICcuL2NvbW1hbmRiYXIvdG9nZ2xlLWJ1dHRvbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ29tbWFuZGJhckFjdGl2ZUZpbHRlcnNDb21wb25lbnQgfSBmcm9tICcuL2NvbW1hbmRiYXIvYWN0aXZlLWZpbHRlcnMvYWN0aXZlLWZpbHRlcnMuY29tcG9uZW50JztcbmltcG9ydCB7IEJjaUNoaXBDb21wb25lbnQgfSBmcm9tICcuL2NoaXAvY2hpcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGV0YWlsVmlld0NvbXBvbmVudCB9IGZyb20gJy4vbWFzdGVyLWRldGFpbC9kZXRhaWwvZGV0YWlsLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IE1hc3RlckRldGFpbFZpZXdDb21wb25lbnQgfSBmcm9tICcuL21hc3Rlci1kZXRhaWwvbWFzdGVyLWRldGFpbC12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXN0ZXJWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9tYXN0ZXItZGV0YWlsL21hc3Rlci9tYXN0ZXItdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmlsdGVyUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9maWx0ZXItcGlja2VyL2ZpbHRlci1waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEZpbHRlckVudHJ5Q29tcG9uZW50IH0gZnJvbSAnLi9maWx0ZXItcGlja2VyL2ZpbHRlci1lbnRyeS9maWx0ZXItZW50cnkuY29tcG9uZW50JztcbmltcG9ydCB7IFBhZ2VDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi9wYWdlLWNvbnRlbnQvcGFnZS1jb250ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCcmVhZGNydW1ic01vZHVsZSB9IGZyb20gJy4vYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICAvLyBUT0RPOiBuZWVkZWQ/XG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBGbGV4TGF5b3V0TW9kdWxlLFxuICAgIEJyZWFkY3J1bWJzTW9kdWxlLFxuICAgIC8qIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cbiAgICBNYXRDYXJkTW9kdWxlLFxuICAgIE1hdENoaXBzTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRTaWRlbmF2TW9kdWxlLFxuICAgIE1hdFRvb2xiYXJNb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0TWVudU1vZHVsZSxcbiAgICBNYXRTbmFja0Jhck1vZHVsZSxcbiAgICBNYXREaWFsb2dNb2R1bGUsXG4gICAgTWF0TGlzdE1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBGaWx0ZXJQYW5lbENvbXBvbmVudCxcbiAgICBTaWRlUGFuZWxDb21wb25lbnQsXG4gICAgU2lkZVBhbmVsSXRlbUNvbXBvbmVudCxcbiAgICBDb250ZW50U2lkZWJhckNvbXBvbmVudCxcbiAgICBDb250ZW50U2lkZWJhckl0ZW1Db21wb25lbnQsXG4gICAgQ29udGVudFdTaWRlUGFuZWxDb21wb25lbnQsXG4gICAgTG9hZGluZ1NwaW5uZXJEaXJlY3RpdmUsXG4gICAgQmNpQ2hpcENvbXBvbmVudCxcbiAgICBCY2lUaWxlQ29tcG9uZW50LFxuICAgIENvbW1hbmRiYXJJdGVtQ29tcG9uZW50LFxuICAgIENvbW1hbmRiYXJCdXR0b25Db21wb25lbnQsXG4gICAgQ29tbWFuZGJhckJ1dHRvbnNEaXJlY3RpdmUsXG4gICAgQ29tbWFuZGJhckNvbXBvbmVudCxcbiAgICBDb21tYW5kYmFyQWN0aW9uc0NvbXBvbmVudCxcbiAgICBDb21tYW5kYmFyQ29tcG9uZW50LFxuICAgIENvbW1hbmRiYXJJbmxpbmVmaWx0ZXJzQ29tcG9uZW50LFxuICAgIENvbW1hbmRiYXJJbmxpbmVmaWx0ZXJDb21wb25lbnQsXG4gICAgQ29tbWFuZGJhclF1aWNrZmlsdGVyc0RpcmVjdGl2ZSxcbiAgICBUb2dnbGVCdXR0b25EaXJlY3RpdmUsXG4gICAgQ29tbWFuZGJhckFjdGl2ZUZpbHRlcnNDb21wb25lbnQsXG4gICAgTWFzdGVyRGV0YWlsVmlld0NvbXBvbmVudCxcbiAgICBNYXN0ZXJWaWV3Q29tcG9uZW50LFxuICAgIERldGFpbFZpZXdDb21wb25lbnQsXG4gICAgRmlsdGVyUGlja2VyQ29tcG9uZW50LFxuICAgIEZpbHRlckVudHJ5Q29tcG9uZW50LFxuICAgIFBhZ2VDb250ZW50Q29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgQnJlYWRjcnVtYnNNb2R1bGUsXG4gICAgRmlsdGVyUGFuZWxDb21wb25lbnQsXG4gICAgU2lkZVBhbmVsQ29tcG9uZW50LFxuICAgIFNpZGVQYW5lbEl0ZW1Db21wb25lbnQsXG4gICAgQ29udGVudFNpZGViYXJDb21wb25lbnQsXG4gICAgQ29udGVudFNpZGViYXJJdGVtQ29tcG9uZW50LFxuICAgIENvbnRlbnRXU2lkZVBhbmVsQ29tcG9uZW50LFxuICAgIExvYWRpbmdTcGlubmVyRGlyZWN0aXZlLFxuICAgIEJjaVRpbGVDb21wb25lbnQsXG4gICAgTWFzdGVyRGV0YWlsVmlld0NvbXBvbmVudCxcbiAgICBNYXN0ZXJWaWV3Q29tcG9uZW50LFxuICAgIERldGFpbFZpZXdDb21wb25lbnQsXG4gICAgQmNpQ2hpcENvbXBvbmVudCxcbiAgICBDb21tYW5kYmFySXRlbUNvbXBvbmVudCxcbiAgICBDb21tYW5kYmFyQnV0dG9uQ29tcG9uZW50LFxuICAgIENvbW1hbmRiYXJCdXR0b25zRGlyZWN0aXZlLFxuICAgIENvbW1hbmRiYXJDb21wb25lbnQsXG4gICAgQ29tbWFuZGJhckFjdGlvbnNDb21wb25lbnQsXG4gICAgQ29tbWFuZGJhckNvbXBvbmVudCxcbiAgICBDb21tYW5kYmFySW5saW5lZmlsdGVyc0NvbXBvbmVudCxcbiAgICBDb21tYW5kYmFySW5saW5lZmlsdGVyQ29tcG9uZW50LFxuICAgIENvbW1hbmRiYXJRdWlja2ZpbHRlcnNEaXJlY3RpdmUsXG4gICAgVG9nZ2xlQnV0dG9uRGlyZWN0aXZlLFxuICAgIENvbW1hbmRiYXJBY3RpdmVGaWx0ZXJzQ29tcG9uZW50LFxuICAgIEZpbHRlclBpY2tlckNvbXBvbmVudCxcbiAgICBGaWx0ZXJFbnRyeUNvbXBvbmVudCxcbiAgICBQYWdlQ29udGVudENvbXBvbmVudCxcbiAgICAvKiBBbmd1bGFyIE1hdGVyaWFsICovXG4gICAgTWF0Q2FyZE1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0U2lkZW5hdk1vZHVsZSxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBCY2lTaGFyZWRNb2R1bGUge1xufVxuIl19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { CORE_CONFIG_URL, CoreConfigurationModule } from './core-configuration/core-configuration.module';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { NotificationComponent } from './notification/notification.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { BciImprintComponent } from './imprint/bci-imprint.component';
import { ENVIRONMENT_PROD } from './environment-prod.token';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { LogoutComponent } from './logout/logout.component';
/**
 * @record
 */
export function ICoreModuleConfig() { }
/** @type {?|undefined} */
ICoreModuleConfig.prototype.prod_environment;
/** @type {?|undefined} */
ICoreModuleConfig.prototype.core_config_url;
/** @type {?} */
export const DefaultCoreModuleConfig = {
    prod_environment: false,
    core_config_url: undefined
};
export class BciCoreModule {
    /**
     * @param {?} parentModule
     * @param {?} iconRegistry
     */
    constructor(parentModule, iconRegistry) {
        this.iconRegistry = iconRegistry;
        throwIfAlreadyLoaded(parentModule, 'BciCoreModule');
        iconRegistry.registerFontClassAlias('bosch', 'Bosch-Ic')
            .setDefaultFontSetClass('Bosch-Ic');
    }
    /**
     * @param {?} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: BciCoreModule,
            providers: [
                {
                    provide: ENVIRONMENT_PROD,
                    useValue: config.prod_environment || DefaultCoreModuleConfig.prod_environment
                },
                {
                    provide: CORE_CONFIG_URL,
                    useValue: config.core_config_url
                }
            ]
        };
    }
}
BciCoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    HttpClientModule,
                    CoreConfigurationModule,
                    FlexLayoutModule,
                    MatDialogModule,
                    MatButtonModule,
                    MatIconModule,
                    OverlayModule,
                    PortalModule
                ],
                declarations: [NotFoundComponent, NotificationComponent, BciImprintComponent, LogoutComponent],
                exports: [NotFoundComponent, NotificationComponent, HttpClientModule, BciImprintComponent, FlexLayoutModule, LogoutComponent],
                entryComponents: [BciImprintComponent, LogoutComponent]
            },] },
];
/** @nocollapse */
BciCoreModule.ctorParameters = () => [
    { type: BciCoreModule, decorators: [{ type: Optional }, { type: SkipSelf }] },
    { type: MatIconRegistry }
];
if (false) {
    /** @type {?} */
    BciCoreModule.prototype.iconRegistry;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYmNpL25nLWNvcmUvIiwic291cmNlcyI6WyJsaWIvY29yZS9jb3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDcEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxlQUFlLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUMxRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDeEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7Ozs7Ozs7QUFRNUQsYUFBYSx1QkFBdUIsR0FBc0I7SUFDeEQsZ0JBQWdCLEVBQUUsS0FBSztJQUN2QixlQUFlLEVBQUUsU0FBUztDQUMzQixDQUFDO0FBdUJGLE1BQU07Ozs7O0lBaUJKLFlBQW9DLFlBQTJCLEVBQVUsWUFBNkI7UUFBN0IsaUJBQVksR0FBWixZQUFZLENBQWlCO1FBQ3BHLG9CQUFvQixDQUFDLFlBQVksRUFBRSxlQUFlLENBQUMsQ0FBQztRQUVwRCxZQUFZLENBQUMsc0JBQXNCLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQzthQUNyRCxzQkFBc0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztLQUN2Qzs7Ozs7SUFyQkQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUF5QjtRQUN0QyxNQUFNLENBQUM7WUFDTCxRQUFRLEVBQUUsYUFBYTtZQUN2QixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGdCQUFnQjtvQkFDekIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxnQkFBZ0IsSUFBSSx1QkFBdUIsQ0FBQyxnQkFBZ0I7aUJBQzlFO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxlQUFlO29CQUN4QixRQUFRLEVBQUUsTUFBTSxDQUFDLGVBQWU7aUJBQ2pDO2FBQ0Y7U0FDRixDQUFDO0tBQ0g7OztZQW5DRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBRVosV0FBVztvQkFDWCxnQkFBZ0I7b0JBQ2hCLHVCQUF1QjtvQkFDdkIsZ0JBQWdCO29CQUVoQixlQUFlO29CQUNmLGVBQWU7b0JBQ2YsYUFBYTtvQkFFYixhQUFhO29CQUNiLFlBQVk7aUJBQ2I7Z0JBQ0QsWUFBWSxFQUFFLENBQUMsaUJBQWlCLEVBQUUscUJBQXFCLEVBQUUsbUJBQW1CLEVBQUUsZUFBZSxDQUFDO2dCQUM5RixPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxxQkFBcUIsRUFBRSxnQkFBZ0IsRUFBRSxtQkFBbUIsRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLENBQUM7Z0JBQzdILGVBQWUsRUFBRSxDQUFDLG1CQUFtQixFQUFFLGVBQWUsQ0FBQzthQUN4RDs7OztZQWtCbUQsYUFBYSx1QkFBbEQsUUFBUSxZQUFJLFFBQVE7WUF6RFgsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgTm90Rm91bmRDb21wb25lbnQgfSBmcm9tICcuL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ09SRV9DT05GSUdfVVJMLCBDb3JlQ29uZmlndXJhdGlvbk1vZHVsZSB9IGZyb20gJy4vY29yZS1jb25maWd1cmF0aW9uL2NvcmUtY29uZmlndXJhdGlvbi5tb2R1bGUnO1xuaW1wb3J0IHsgdGhyb3dJZkFscmVhZHlMb2FkZWQgfSBmcm9tICcuL21vZHVsZS1pbXBvcnQtZ3VhcmQnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7IE1hdERpYWxvZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlLCBNYXRJY29uUmVnaXN0cnkgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7IEJjaUltcHJpbnRDb21wb25lbnQgfSBmcm9tICcuL2ltcHJpbnQvYmNpLWltcHJpbnQuY29tcG9uZW50JztcbmltcG9ydCB7IEVOVklST05NRU5UX1BST0QgfSBmcm9tICcuL2Vudmlyb25tZW50LXByb2QudG9rZW4nO1xuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2ZsZXgtbGF5b3V0JztcbmltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBQb3J0YWxNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IExvZ291dENvbXBvbmVudCB9IGZyb20gJy4vbG9nb3V0L2xvZ291dC5jb21wb25lbnQnO1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvcmVNb2R1bGVDb25maWcge1xuICBwcm9kX2Vudmlyb25tZW50PzogYm9vbGVhbjtcbiAgY29yZV9jb25maWdfdXJsPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgRGVmYXVsdENvcmVNb2R1bGVDb25maWc6IElDb3JlTW9kdWxlQ29uZmlnID0ge1xuICBwcm9kX2Vudmlyb25tZW50OiBmYWxzZSxcbiAgY29yZV9jb25maWdfdXJsOiB1bmRlZmluZWRcbn07XG5cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICAvLyBUT0RPOiBuZWVkZWQ/XG4gICAgRm9ybXNNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBDb3JlQ29uZmlndXJhdGlvbk1vZHVsZSxcbiAgICBGbGV4TGF5b3V0TW9kdWxlLFxuICAgIC8qIEFuZ3VsYXIgTWF0ZXJpYWwqL1xuICAgIE1hdERpYWxvZ01vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICAvKiBDREsgKi9cbiAgICBPdmVybGF5TW9kdWxlLFxuICAgIFBvcnRhbE1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtOb3RGb3VuZENvbXBvbmVudCwgTm90aWZpY2F0aW9uQ29tcG9uZW50LCBCY2lJbXByaW50Q29tcG9uZW50LCBMb2dvdXRDb21wb25lbnRdLFxuICBleHBvcnRzOiBbTm90Rm91bmRDb21wb25lbnQsIE5vdGlmaWNhdGlvbkNvbXBvbmVudCwgSHR0cENsaWVudE1vZHVsZSwgQmNpSW1wcmludENvbXBvbmVudCwgRmxleExheW91dE1vZHVsZSwgTG9nb3V0Q29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbQmNpSW1wcmludENvbXBvbmVudCwgTG9nb3V0Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBCY2lDb3JlTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoY29uZmlnOiBJQ29yZU1vZHVsZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQmNpQ29yZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogRU5WSVJPTk1FTlRfUFJPRCxcbiAgICAgICAgICB1c2VWYWx1ZTogY29uZmlnLnByb2RfZW52aXJvbm1lbnQgfHwgRGVmYXVsdENvcmVNb2R1bGVDb25maWcucHJvZF9lbnZpcm9ubWVudFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQ09SRV9DT05GSUdfVVJMLFxuICAgICAgICAgIHVzZVZhbHVlOiBjb25maWcuY29yZV9jb25maWdfdXJsXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBCY2lDb3JlTW9kdWxlLCBwcml2YXRlIGljb25SZWdpc3RyeTogTWF0SWNvblJlZ2lzdHJ5KSB7XG4gICAgdGhyb3dJZkFscmVhZHlMb2FkZWQocGFyZW50TW9kdWxlLCAnQmNpQ29yZU1vZHVsZScpO1xuXG4gICAgaWNvblJlZ2lzdHJ5LnJlZ2lzdGVyRm9udENsYXNzQWxpYXMoJ2Jvc2NoJywgJ0Jvc2NoLUljJylcbiAgICAgIC5zZXREZWZhdWx0Rm9udFNldENsYXNzKCdCb3NjaC1JYycpO1xuICB9XG59XG4iXX0=
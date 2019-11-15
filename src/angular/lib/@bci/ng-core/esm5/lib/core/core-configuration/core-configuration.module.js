/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
import * as tslib_1 from "tslib";
import { APP_INITIALIZER, InjectionToken, NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreConfigurationService } from './core-configuration.service';
import { throwIfAlreadyLoaded } from '../module-import-guard';
import { CoreConfig } from './core-config';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogConfig } from '@angular/material';
/** @type {?} */
export var CORE_CONFIG_URL = new InjectionToken('CORE_CONFIG_URL');
/**
 * @param {?} coreConfigService
 * @param {?} coreConfigUrl
 * @return {?}
 */
export function coreConfigInitializer(coreConfigService, coreConfigUrl) {
    if (!coreConfigUrl || coreConfigUrl.length === 0) {
        return function () {
            return Promise.resolve(new CoreConfig());
        };
    }
    /** @type {?} */
    var t = coreConfigService;
    return function () {
        return t.load(coreConfigUrl);
    };
}
/** @type {?} */
export var dialogDefaultOptions = tslib_1.__assign({}, new MatDialogConfig(), {
    width: 'auto',
    height: 'auto'
});
var CoreConfigurationModule = /** @class */ (function () {
    function CoreConfigurationModule(parentModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreConfigurationModule');
    }
    CoreConfigurationModule.decorators = [
        { type: NgModule, args: [{
                    imports: [HttpClientModule],
                    providers: [
                        {
                            provide: APP_INITIALIZER,
                            useFactory: coreConfigInitializer,
                            // useFactory: (coreConfigService: CoreConfigurationService) =>  coreConfigInitializer(coreConfigService) ,
                            deps: [CoreConfigurationService, CORE_CONFIG_URL],
                            multi: true
                        },
                        {
                            provide: MAT_DIALOG_DEFAULT_OPTIONS,
                            useValue: dialogDefaultOptions
                        }
                    ]
                },] },
    ];
    /** @nocollapse */
    CoreConfigurationModule.ctorParameters = function () { return [
        { type: CoreConfigurationModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    return CoreConfigurationModule;
}());
export { CoreConfigurationModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS1jb25maWd1cmF0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BiY2kvbmctY29yZS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL2NvcmUtY29uZmlndXJhdGlvbi9jb3JlLWNvbmZpZ3VyYXRpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDeEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7O0FBRWhGLFdBQWEsZUFBZSxHQUFHLElBQUksY0FBYyxDQUFTLGlCQUFpQixDQUFDLENBQUM7Ozs7OztBQUU3RSxNQUFNLGdDQUFnQyxpQkFBMkMsRUFBRSxhQUFxQjtJQUN0RyxFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWEsSUFBSSxhQUFhLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakQsTUFBTSxDQUFDO1lBQ0wsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxVQUFVLEVBQUUsQ0FBQyxDQUFDO1NBQzFDLENBQUM7S0FDSDs7SUFDRCxJQUFNLENBQUMsR0FBRyxpQkFBaUIsQ0FBQztJQUM1QixNQUFNLENBQUM7UUFDTCxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztLQUM5QixDQUFDO0NBQ0g7O0FBRUQsV0FBYSxvQkFBb0Isd0JBQzNCLElBQUksZUFBZSxFQUFFLEVBQ3JCO0lBQ0YsS0FBSyxFQUFFLE1BQU07SUFDYixNQUFNLEVBQUUsTUFBTTtDQUNmLEVBQ0Q7O0lBbUJBLGlDQUFvQyxZQUFxQztRQUN2RSxvQkFBb0IsQ0FBQyxZQUFZLEVBQUUseUJBQXlCLENBQUMsQ0FBQztLQUMvRDs7Z0JBbkJGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztvQkFDM0IsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxlQUFlOzRCQUN4QixVQUFVLEVBQUUscUJBQXFCOzs0QkFFakMsSUFBSSxFQUFFLENBQUMsd0JBQXdCLEVBQUUsZUFBZSxDQUFDOzRCQUNqRCxLQUFLLEVBQUUsSUFBSTt5QkFDWjt3QkFDRDs0QkFDRSxPQUFPLEVBQUUsMEJBQTBCOzRCQUNuQyxRQUFRLEVBQUUsb0JBQW9CO3lCQUMvQjtxQkFDRjtpQkFDRjs7OztnQkFFbUQsdUJBQXVCLHVCQUE1RCxRQUFRLFlBQUksUUFBUTs7a0NBbERuQzs7U0FpRGEsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBBUFBfSU5JVElBTElaRVIsIEluamVjdGlvblRva2VuLCBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQ29yZUNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9jb3JlLWNvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyB0aHJvd0lmQWxyZWFkeUxvYWRlZCB9IGZyb20gJy4uL21vZHVsZS1pbXBvcnQtZ3VhcmQnO1xuaW1wb3J0IHsgQ29yZUNvbmZpZyB9IGZyb20gJy4vY29yZS1jb25maWcnO1xuaW1wb3J0IHsgTUFUX0RJQUxPR19ERUZBVUxUX09QVElPTlMsIE1hdERpYWxvZ0NvbmZpZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuZXhwb3J0IGNvbnN0IENPUkVfQ09ORklHX1VSTCA9IG5ldyBJbmplY3Rpb25Ub2tlbjxzdHJpbmc+KCdDT1JFX0NPTkZJR19VUkwnKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvcmVDb25maWdJbml0aWFsaXplcihjb3JlQ29uZmlnU2VydmljZTogQ29yZUNvbmZpZ3VyYXRpb25TZXJ2aWNlLCBjb3JlQ29uZmlnVXJsOiBzdHJpbmcpOiAoKSA9PiBQcm9taXNlPENvcmVDb25maWc+IHtcbiAgaWYgKCFjb3JlQ29uZmlnVXJsIHx8IGNvcmVDb25maWdVcmwubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IENvcmVDb25maWcoKSk7XG4gICAgfTtcbiAgfVxuICBjb25zdCB0ID0gY29yZUNvbmZpZ1NlcnZpY2U7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHQubG9hZChjb3JlQ29uZmlnVXJsKTtcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IGRpYWxvZ0RlZmF1bHRPcHRpb25zOiBNYXREaWFsb2dDb25maWc8YW55PiA9IHtcbiAgLi4uIG5ldyBNYXREaWFsb2dDb25maWcoKSxcbiAgLi4uIHtcbiAgICB3aWR0aDogJ2F1dG8nLFxuICAgIGhlaWdodDogJ2F1dG8nXG4gIH1cbn07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtIdHRwQ2xpZW50TW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxuICAgICAgdXNlRmFjdG9yeTogY29yZUNvbmZpZ0luaXRpYWxpemVyLFxuICAgICAgLy8gdXNlRmFjdG9yeTogKGNvcmVDb25maWdTZXJ2aWNlOiBDb3JlQ29uZmlndXJhdGlvblNlcnZpY2UpID0+ICBjb3JlQ29uZmlnSW5pdGlhbGl6ZXIoY29yZUNvbmZpZ1NlcnZpY2UpICxcbiAgICAgIGRlcHM6IFtDb3JlQ29uZmlndXJhdGlvblNlcnZpY2UsIENPUkVfQ09ORklHX1VSTF0sXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogTUFUX0RJQUxPR19ERUZBVUxUX09QVElPTlMsXG4gICAgICB1c2VWYWx1ZTogZGlhbG9nRGVmYXVsdE9wdGlvbnNcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ29yZUNvbmZpZ3VyYXRpb25Nb2R1bGUge1xuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IENvcmVDb25maWd1cmF0aW9uTW9kdWxlKSB7XG4gICAgdGhyb3dJZkFscmVhZHlMb2FkZWQocGFyZW50TW9kdWxlLCAnQ29yZUNvbmZpZ3VyYXRpb25Nb2R1bGUnKTtcbiAgfVxufVxuIl19
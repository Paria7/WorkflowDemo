import { InjectionToken } from '@angular/core';
import { CoreConfigurationService } from './core-configuration.service';
import { CoreConfig } from './core-config';
import { MatDialogConfig } from '@angular/material';
export declare const CORE_CONFIG_URL: InjectionToken<string>;
export declare function coreConfigInitializer(coreConfigService: CoreConfigurationService, coreConfigUrl: string): () => Promise<CoreConfig>;
export declare const dialogDefaultOptions: MatDialogConfig<any>;
export declare class CoreConfigurationModule {
    constructor(parentModule: CoreConfigurationModule);
}

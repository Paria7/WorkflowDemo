import { ModuleWithProviders } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
export interface ICoreModuleConfig {
    prod_environment?: boolean;
    core_config_url?: string;
}
export declare const DefaultCoreModuleConfig: ICoreModuleConfig;
export declare class BciCoreModule {
    private iconRegistry;
    static forRoot(config: ICoreModuleConfig): ModuleWithProviders;
    constructor(parentModule: BciCoreModule, iconRegistry: MatIconRegistry);
}

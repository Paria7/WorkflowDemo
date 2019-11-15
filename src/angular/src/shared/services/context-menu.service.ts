import { Injectable, ViewContainerRef, ComponentFactoryResolver, Renderer2 } from '@angular/core';


@Injectable()
export class ContextMenuService {
    constructor(private viewContainerRef: ViewContainerRef,
        private componentFactoryResolver: ComponentFactoryResolver,
        private renderer: Renderer2
    ) {
    }

    showMenus(e: MouseEvent) {
        const factory = this.componentFactoryResolver.resolveComponentFactory('ContextMenuComponent' as any);
        const component = this.viewContainerRef.createComponent(factory);
        const el = component.location.nativeElement;

        const x = e.clientX;
        const y = e.clientY;

        this.renderer.setStyle(el, 'top', y + 'px');
        this.renderer.setStyle(el, 'left', x + 'px');
    }
}

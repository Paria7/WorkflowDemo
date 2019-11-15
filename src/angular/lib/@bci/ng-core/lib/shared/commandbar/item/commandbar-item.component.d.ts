import { TemplateRef } from '@angular/core';
export declare class CommandbarItemComponent {
    /**
     * Set item-class on host element if rendered directly.
     */
    classCommandbarItem: boolean;
    /**
     * Whether to render the item in-place instead of using a template outlet.
     */
    render: boolean;
    /**
     * When to hide the item in a submenu. Valid values are:
     * * empty: always hidden
     * * boolean: hidden if true, shown otherwise
     * * non-empty string: Checked against ObservableMedia.isActive (see https://github.com/angular/flex-layout/wiki/ObservableMedia)
     *                     either supporting css-media-queries or predefined aliases like xs, lt-md, gt-lg.
     */
    hide: string;
    /**
     * The reference to the item's template.
     */
    template: TemplateRef<any>;
}

import { AfterContentInit, OnDestroy, OnInit, QueryList } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';
import { CommandbarItemComponent } from '../item/commandbar-item.component';
export declare class CommandbarActionsComponent implements OnInit, OnDestroy, AfterContentInit {
    private observableMedia;
    items: QueryList<CommandbarItemComponent>;
    visibleItems: CommandbarItemComponent[];
    hiddenItems: CommandbarItemComponent[];
    private componentDestroyed$;
    constructor(observableMedia: ObservableMedia);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterContentInit(): void;
    private updateView();
    private trueOrMatchesMediaState(value);
}

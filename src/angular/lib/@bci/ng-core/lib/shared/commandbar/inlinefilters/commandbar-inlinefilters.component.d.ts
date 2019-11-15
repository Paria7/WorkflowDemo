import { AfterContentInit, OnDestroy, OnInit, QueryList } from '@angular/core';
import { CommandbarInlinefilterComponent } from '../inlinefilter/commandbar-inlinefilter.component';
import { ObservableMedia } from '@angular/flex-layout';
export declare class CommandbarInlinefiltersComponent implements OnInit, OnDestroy, AfterContentInit {
    private observableMedia;
    items: QueryList<CommandbarInlinefilterComponent>;
    visibleItems: CommandbarInlinefilterComponent[];
    hiddenItems: CommandbarInlinefilterComponent[];
    private componentDestroyed$;
    constructor(observableMedia: ObservableMedia);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterContentInit(): void;
    private updateView();
    private trueOrMatchesMediaState(value);
}

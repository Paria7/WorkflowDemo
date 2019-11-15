import { OnInit } from '@angular/core';
import { CommandbarButtonComponent } from './button/commandbar-button.component';
export declare class CommandbarButtonsDirective implements OnInit {
    private host;
    private icon;
    constructor(host: CommandbarButtonComponent);
    buttonAdd: any;
    buttonEdit: any;
    buttonDelete: any;
    ngOnInit(): void;
    private setIcon(icon);
}

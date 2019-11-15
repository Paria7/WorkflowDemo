/**
 * @licence
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
import { OnInit } from '@angular/core';
import { BciImprintDetailsService } from './bci-imprint-details.service';
import { ImprintModel } from './imprint.model';
import { ModalWindowService } from '../modal-window/modal-window.service';
import { MatDialogRef } from '@angular/material';
export declare class BciImprintComponent implements OnInit {
    private modalWindowService;
    private imprintDetailsService;
    private dialogRef;
    data: ImprintModel;
    constructor(modalWindowService: ModalWindowService, imprintDetailsService: BciImprintDetailsService, dialogRef: MatDialogRef<BciImprintComponent>);
    ngOnInit(): void;
    clickCancel(): void;
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'app-create-workflow',
  templateUrl: './create-workflow.component.html',
  styleUrls: ['./create-workflow.component.scss']
})
export class CreateWorkflowComponent implements OnInit {
  @ViewChild('createWorkflowComponent') modal: ModalDirective;

  active: boolean = false;
  saving: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  show(): void {
    this.active = true;
    this.modal.show();
  }
}

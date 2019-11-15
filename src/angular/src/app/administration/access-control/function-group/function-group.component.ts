import { Component, OnInit, Input } from '@angular/core';
import { FunctionModel } from 'shared/models/administration/function.model';

@Component({
  selector: 'app-function-group',
  templateUrl: './function-group.component.html',
  styleUrls: ['./function-group.component.scss']
})
export class FunctionGroupComponent implements OnInit {

  @Input() header: string;
  @Input() functions: FunctionModel[];

  constructor() { }

  ngOnInit() {
  }
}

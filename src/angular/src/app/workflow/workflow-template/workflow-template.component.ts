import { Component, OnInit, Renderer2 } from '@angular/core';
import $ from 'jquery';
import * as d3 from 'd3';
import { DndDropEvent } from 'ngx-drag-drop';

declare const jsPlumb: any

@Component({
  selector: 'app-workflow-template',
  templateUrl: './workflow-template.component.html',
  styleUrls: ['./workflow-template.component.scss']
})
export class WorkflowTemplateComponent implements OnInit {
  tools$: any;


  constructor() { }

  ngOnInit() {
  }

}

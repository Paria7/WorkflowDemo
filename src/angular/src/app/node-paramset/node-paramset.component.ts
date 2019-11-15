import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatPaginator, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-node-paramset',
  templateUrl: './node-paramset.component.html',
  styleUrls: ['./node-paramset.component.scss']
})
export class NodeParamsetComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public dialogRef: MatDialogRef<NodeParamsetComponent>,
  ) { }

  ngOnInit() {
  }

}

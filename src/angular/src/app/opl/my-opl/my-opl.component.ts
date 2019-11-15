import { Component, OnInit, ViewChild } from '@angular/core';
import { OplViewComponent } from './opl-view.component';
import { MatTabChangeEvent } from '@angular/material'
import { OplTabInfoModel } from 'shared/models/opl'

@Component({
  selector: 'app-my-opl',
  templateUrl: './my-opl.component.html',
  styleUrls: ['./my-opl.component.scss']
})
export class MyOplComponent implements OnInit {
  @ViewChild('oplViewModel') oplViewModel: OplViewComponent;

  tabInfos: OplTabInfoModel[] = [
    { Index: 0, TabIndex: 0, TabName: "OPL.NewTab" },
    { Index: 1, TabIndex: undefined, TabName: "OPL.DoingTab" },
    { Index: 2, TabIndex: undefined, TabName: "OPL.DoneTab" }];

  constructor() {
  }

  ngOnInit() {
  }
  onSelectedTabChange($event: MatTabChangeEvent | number) {
    let tabIndex = $event instanceof MatTabChangeEvent ? $event.index : $event;

    this.tabInfos.forEach(t => {
      if (t.Index == tabIndex) {
        t.TabIndex = tabIndex;
      }
      else {
        t.TabIndex = undefined;
      }
    })
  }
}

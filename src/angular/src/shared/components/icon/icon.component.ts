import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() custom = true;
  @Input() type: string;
  @Input() color: string;
  @Input() size: number;
  @Output() click = new EventEmitter<MouseEvent>();

  className: string;
  style: any;

  constructor() {
    this.style = {};
  }

  ngOnInit() {
    if (this.custom) {
      this.className = `iconfont icon-${this.type}`;
    } else {
      this.className = `anticon anticon-${this.type}`;
    }

    if (this.size > 0) {
      this.style['font-size'] = `${this.size}px`;
      this.style['line-height'] = `${this.size}px`;
    }
    if (this.color) {
      this.style['color'] = this.color;
    }
  }

  onClick(event) {
    this.click.emit(event);
  }
}

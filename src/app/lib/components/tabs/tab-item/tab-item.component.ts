import { Component, ContentChild, Input, OnInit } from '@angular/core';
import { TabBodyComponent } from '../tab-body/tab-body.component';
import { TabLabelComponent } from '../tab-label/tab-label.component';

@Component({
  selector: 'app-tab-item',
  templateUrl: './tab-item.component.html',
  styleUrls: ['./tab-item.component.scss']
})
export class TabItemComponent implements OnInit {
  @Input()
  label?: string;

  @Input()
  isActive?: boolean;

  @ContentChild(TabBodyComponent)
  bodyComponent: TabBodyComponent | null = null;

  @ContentChild(TabLabelComponent)
  labelComponent: TabLabelComponent | null = null;

  constructor() {
  }

  ngOnInit(): void {
  }
}

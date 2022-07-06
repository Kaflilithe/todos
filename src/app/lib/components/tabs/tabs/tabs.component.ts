import { AfterContentChecked, AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { TabItemComponent } from '../tab-item/tab-item.component';
import { delay, map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements AfterContentInit, AfterContentChecked {
  @ContentChildren(TabItemComponent)
  tabs: QueryList<TabItemComponent> = new QueryList();

  tabItems$?: Observable<TabItemComponent[]>;

  activeTab?: TabItemComponent;


  constructor() {
  }

  ngAfterContentInit(): void {

    this.tabItems$ = this.tabs.changes
      .pipe(startWith(''))
      .pipe(delay(0))
      .pipe(map(() => this.tabs.toArray()));
  }

  ngAfterContentChecked() {
    if (!this.activeTab) {
      Promise.resolve().then(() => {
        this.activeTab = this.tabs.first;
      });
    }
  }

  selectTab(tabItem: TabItemComponent) {
    if (this.activeTab === tabItem) {
      return;
    }

    if (this.activeTab) {
      this.activeTab.isActive = false;

    }

    this.activeTab = tabItem;

    tabItem.isActive = true;
  }
}

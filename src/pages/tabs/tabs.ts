import { Component } from '@angular/core';

import { ExplorePage } from '../explore/explore';
import { ConnectPage } from '../connect/connect';
import { EventsPage } from '../events/events';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ExplorePage;
  tab2Root = ConnectPage;
  tab3Root = EventsPage;

  constructor() {

  }
}

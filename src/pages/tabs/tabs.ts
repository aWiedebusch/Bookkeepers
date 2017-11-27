import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { ScanInPage } from '../scan-in/scan-in';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ScanInPage;
  tab3Root = AboutPage;

  constructor() {

  }
}

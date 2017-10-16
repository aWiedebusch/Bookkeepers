import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { InventoryPage } from '../inventory/inventory';
//import { ScanPage } from '../scan/scan';
import { AddPage } from '../add/add';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  scannedTapped(event) {
    //this.navCtrl.setRoot(ScanPage)
  }

  addTapped(event) {
    this.navCtrl.setRoot(AddPage)
  }

  listTapped(event) {
    this.navCtrl.setRoot(InventoryPage)
  }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { InventoryPage } from '../inventory/inventory';
import { CameraPage } from '../camera/camera';
import { HistoryPage } from '../history/history';
import { AddPage } from '../add/add';
//import { BookPage } from '../book/book';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  scanTapped(event) {
    this.navCtrl.setRoot(CameraPage)
  }

  historyTapped(event) {
    this.navCtrl.push(HistoryPage)
  }

  addTapped(event) {
    this.navCtrl.push(AddPage)
  }

  listTapped(event) {
    this.navCtrl.push(InventoryPage)
  }

}

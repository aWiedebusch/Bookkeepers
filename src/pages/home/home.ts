import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { InventoryPage } from '../inventory/inventory';
import { CameraPage } from '../camera/camera';
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

  addTapped(event) {
    this.navCtrl.setRoot(AddPage)
  }

  listTapped(event) {
    this.navCtrl.setRoot(InventoryPage)
  }

}

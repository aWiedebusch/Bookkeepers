import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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
    //this.navCtrl.setRoot(AddPage)
  }

  listTapped(event) {
    //this.navCtrl.setRoot(ListPage)
  }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {

    history: any

  constructor(public navCtrl: NavController, private storage: Storage) {
  }

  ngOnInit() {
    this.getSales()
  }

    getSales() {

    // console.log(this.storage.get("History"))

    this.storage.get("History").then((val) =>
    { 
        this.history = val
        console.log(val)
    })
    console.log(this.history)
  }

}
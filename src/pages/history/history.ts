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
    this.history = []
  }

  ngOnInit() {
    this.getSales()
  }

    getSales() {

    this.storage.get("History").then((val) =>
    { 
        this.history.push(val)
    })
  }

}
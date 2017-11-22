import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage'
import { InventoryPage } from '../inventory/inventory';



@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class AddPage {

  info: any
  isbn: number = null
  title: string = ""
  genre: string = ""
  author: string = ""
  price: number = null
  publisher: string = ""
  condition: string = ""
  additional_info: string = ""

  constructor(public navCtrl: NavController, private storage: Storage) 
  { }

  add(){

    let key = String(this.isbn);
    this.storage.get(key).then(data =>
    {
      // If isbn exists in inventory already, add to existing
      if(data)
      {
        // Update existing isbn key here
        data.push({
          isbn: String(this.isbn),
          title: this.title,
          author: this.author,
          genre: this.genre,
          price: this.price,
          publisher: this.publisher,
          condition: this.condition,
          additional_info: this.additional_info
        })
        this.storage.set(String(this.isbn), data)
      }

      // If isbn number doesn't exist already in inventory, add it
      else
      {
        this.storage.set(String(this.isbn), [{
          isbn: String(this.isbn),
          title: this.title,
          author: this.author,
          genre: this.genre,
          price: this.price,
          publisher: this.publisher,
          condition: this.condition,
          additional_info: this.additional_info
        }])
      }
    })
    this.navCtrl.setRoot(InventoryPage) 
  }
}
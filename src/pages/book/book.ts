import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { InventoryPage } from '../inventory/inventory';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-book',
  templateUrl: 'book.html'
})

export class BookPage {

  book: any;
  index: any;

  isbn: any
  title: string = ""
  genre: string = ""
  author: string = ""
  price: number = null
  publisher: string = ""
  condition: string = ""
  additional_info: string = ""

  constructor(public navCtrl: NavController, private storage: Storage, public navParams: NavParams) {
    var wrapper = navParams.get('Wrapper');
    this.book = wrapper[0];
    this.index = wrapper[1];

    this.isbn = String(this.book.isbn),
    this.title = this.book.title,
    this.author = this.book.author,
    this.genre = this.book.genre,
    this.price = this.book.price,
    this.publisher = this.book.publisher,
    this.condition = this.book.condition,
    this.additional_info = this.book.additional_info
  }

  ngOnInit() {
  }

  writeBook() {
    let key = String(this.book.isbn);
    
    this.storage.get(key).then(val => {

    val[this.index] = {
      isbn: String(this.isbn),
      title: this.title,
      author: this.author,
      genre: this.genre,
      price: this.price,
      publisher: this.publisher,
      condition: this.condition,
      additional_info: this.additional_info
    };
    

    this.storage.set(String(this.isbn), val);
    })

    this.navAway()
  }

  sellBook() {
    let key = String(this.book.isbn);

    // this.storage.get("History").then(val => {
    //   console.log(val)
    //   this.storage.set("History", val.push({
    //     isbn: this.isbn,
    //     price: this.price,
    //     title: this.title
    //   }))
    //   // this.storage.get("History").then(val => console.log(val))
    // })
    
    this.storage.get(key).then(val => {

    if(val.length == 1) {
      this.storage.remove(this.isbn)
    }
    else {
      val.pop(this.index)
      this.storage.set(String(this.isbn), val);
    }
    })
    this.navAway()
  }

  navAway() {
    this.navCtrl.resize()
    this.navCtrl.setRoot(InventoryPage)
  }
}


import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { BookPage } from '../book/book';

@Component({
  selector: 'page-inventory',
  templateUrl: 'inventory.html'
})
export class InventoryPage {

  all_books: any

  constructor(public navCtrl: NavController, private storage: Storage) {
      this.all_books = []
  }


  ngOnInit() {
    this.all_books = this.getBooks();
  }

  async getBooks() {
    var index = await this.storage.keys()
    var books = []

    for(let book of index) {
      books.push(this.storage.get(book))
    }
    return books
  }

  clickBook(isbn) {
    this.navCtrl.push(BookPage,this.storage.get(isbn))
  }


}

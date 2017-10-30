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
  showLevel1: any

  constructor(public navCtrl: NavController, private storage: Storage) {
    this.all_books = []
    this.showLevel1 = null;
  }


  ngOnInit() {
    //this.testStore()
    this.getBooks().then((val) => this.all_books = val)
  }

  testStore() {
    this.storage.set('abc', 
    [{
      isbn: "abc",
      title: "Cats",
      author: "Demz",
      genre: "be Catz",
      publisher: "Penguins",
      price: "19.99",
      condition: "Good",
      additional_info: "none"
    },
    {
      isbn: "abc",
      title: "Cats",
      author: "Demz",
      genre: "be Catz",
      publisher: "Penguins",
      price: "0.99",
      condition: "Good",
      additional_info: "none"
    }
    ])
    this.storage.set('1', 
    [{
      isbn: "1",
      title: "boop",
      author: "Demz",
      genre: "be Boopz",
      publisher: "Penguins",
      price: "19.99",
      condition: "Good",
      additional_info: "none"
    },
    {
      isbn: "1",
      title: "boop",
      author: "Demz",
      genre: "be Boopz",
      publisher: "Penguins",
      price: "0.99",
      condition: "Good",
      additional_info: "none"
    }
    ])
  }

  async getBooks() {
    var index
    Promise.all(index = await this.storage.keys())
    var books = []

    for (let book of index) {
      this.storage.get(book).then((val) => books.push(val))
    }
    //console.log(books)
    return books
  }

  clickBook(book_obj) {
    this.navCtrl.push(BookPage, book_obj)
  }

  toggleLevel1(idx) {
    if (this.isLevel1Shown(idx)) {
      this.showLevel1 = null;
    } else {
      this.showLevel1 = idx;
    }
  };

  isLevel1Shown(idx) {
    return this.showLevel1 === idx;
  };
  
}

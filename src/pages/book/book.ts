import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';

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

  // editBook(element) {
  //   let key = String(this.book.isbn);

  //   this.book.author = prompt('Please enter a new author');
  //   this.storage.get(key).then(data =>
  //   {
  //     // Update existing isbn key here
  //     data[this.index] = {
  //       isbn: String(this.book.isbn),
  //       title: this.book.title,
  //       author: this.book.author,
  //       genre: this.book.genre,
  //       price: this.book.price,
  //       publisher: this.book.publisher,
  //       condition: this.book.condition,
  //       additional_info: this.book.additional_info
  //     };
  //     this.storage.set(String(this.book.isbn), data)
  //   })
  // }

  writeBook() {
    let key = String(this.book.isbn);

    // var book_container = []
    
    this.storage.get(key).then(val => {

      console.log(this.index)

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
    
    console.log(val)

    this.storage.set(String(this.isbn), val);
    })
  }
}


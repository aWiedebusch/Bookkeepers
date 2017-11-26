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

  constructor(public navCtrl: NavController, private storage: Storage, public navParams: NavParams) {
    this.book = navParams.get('Book');
    this.index = navParams.get('index');
  }

  editBook(element) {
    let key = String(this.book.isbn);

    switch(element) {
      case 'title':
        this.book.title = prompt('Please enter a new title');

        this.storage.get(key).then(data =>
        {
          // Update existing isbn key here
          data[this.index] = {
            isbn: String(this.book.isbn),
            title: this.book.title,
            author: this.book.author,
            genre: this.book.genre,
            price: this.book.price,
            publisher: this.book.publisher,
            condition: this.book.condition,
            additional_info: this.book.additional_info
          };
          this.storage.set(String(this.book.isbn), data)
        })
        break;

      case 'genre':
        this.book.genre = prompt('Please enter a new genre');
        this.storage.get(key).then(data =>
        {
          // Update existing isbn key here
          data[this.index] = {
            isbn: String(this.book.isbn),
            title: this.book.title,
            author: this.book.author,
            genre: this.book.genre,
            price: this.book.price,
            publisher: this.book.publisher,
            condition: this.book.condition,
            additional_info: this.book.additional_info
          };
          this.storage.set(String(this.book.isbn), data)
        })
        break;
      
      case 'author':
        this.book.author = prompt('Please enter a new author');
        this.storage.get(key).then(data =>
        {
          // Update existing isbn key here
          data[this.index] = {
            isbn: String(this.book.isbn),
            title: this.book.title,
            author: this.book.author,
            genre: this.book.genre,
            price: this.book.price,
            publisher: this.book.publisher,
            condition: this.book.condition,
            additional_info: this.book.additional_info
          };
          this.storage.set(String(this.book.isbn), data)
        })
        break;

      case 'price':
        this.book.price = prompt('Please enter a new price');
        this.storage.get(key).then(data =>
        {
          // Update existing isbn key here
          data[this.index] = {
            isbn: String(this.book.isbn),
            title: this.book.title,
            author: this.book.author,
            genre: this.book.genre,
            price: this.book.price,
            publisher: this.book.publisher,
            condition: this.book.condition,
            additional_info: this.book.additional_info
          };
          this.storage.set(String(this.book.isbn), data)
        })
        break;
        
      case 'condition':
        this.book.condition = prompt('Please enter a new condition');
        this.storage.get(key).then(data =>
        {
          // Update existing isbn key here
          data[this.index] = {
            isbn: String(this.book.isbn),
            title: this.book.title,
            author: this.book.author,
            genre: this.book.genre,
            price: this.book.price,
            publisher: this.book.publisher,
            condition: this.book.condition,
            additional_info: this.book.additional_info
          };
          this.storage.set(String(this.book.isbn), data)
        })
        break;

      case 'desc':
        this.book.additional_info = prompt('Please enter a new description');
        this.storage.get(key).then(data =>
        {
          // Update existing isbn key here
          data[this.index] = {
            isbn: String(this.book.isbn),
            title: this.book.title,
            author: this.book.author,
            genre: this.book.genre,
            price: this.book.price,
            publisher: this.book.publisher,
            condition: this.book.condition,
            additional_info: this.book.additional_info
          };
          this.storage.set(String(this.book.isbn), data)
        })
        break;
    }
  }
}


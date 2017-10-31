import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-book',
  templateUrl: 'book.html'
})

export class BookPage {

  book: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.book = navParams.get('Book');
  }

  editBook(element) {
    switch(element) {
      case 'title':
        this.book.title = prompt('Please enter a new title');
        break;

      case 'genre':
        this.book.genre = prompt('Please enter a new genre');
        break;
      
      case 'author':
        this.book.author = prompt('Please enter a new author');
        break;

      case 'price':
        this.book.price = prompt('Please enter a new price');
        break;
      
      case 'publisher':
        this.book.publisher = prompt('Please enter a new publisher');
        break;
        
      case 'condition':
        this.book.condition = prompt('Please enter a new condition');
        break;

      case 'desc':
        this.book.additional_info = prompt('Please enter a new description');
        break;
    }
  }
}


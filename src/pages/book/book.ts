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
    
  }
}


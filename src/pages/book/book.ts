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

  setBook() {
    this.book.isbn = "abc";
    this.book.title = "Cats";
    this.book.author = "Demz";
    this.book.genre = "be Catz";
    this.book.publisher = "Penguins";
    this.book.price = "19.99";
    this.book.condition = "Good";
    this.book.additional_info = "none";
  }

  ngOnInit() {
    this.setBook();
  }
}


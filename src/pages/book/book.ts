import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-book',
  templateUrl: 'book.html'
})

export class BookPage {

  isbn: any;
  title: any;
  genre: any;
  author: any;
  price: any;
  publisher: any;
  condition: any;
  additional_info: any;

  constructor(public navCtrl: NavController) {
    this.isbn = null;
    this.title = "Title text";
    this.genre = "Genre text";
    this.author = "Author text";
    this.price = "Price text";
    this.publisher = "Publisher text";
    this.condition = "Condition text";
    this.additional_info = "Description text";
  }

  getElem(element) {
    
    switch(element) {
      case 'title':
        return this.title;

      case 'genre':
        return this.genre;
      
      case 'author':
        return this.author;

      case 'price':
        return this.price;
      
      case 'publisher':
        return this.publisher;
        
      case 'condition':
        return this.condition;

      case 'desc':
        return this.additional_info;
    }
  }

  editBook(element) {

    switch(element) {
      case 'title':
        this.title = prompt('Please enter a new title');
        break;

      case 'genre':
        this.genre = prompt('Please enter a new genre');
        break;
      
      case 'author':
        this.author = prompt('Please enter a new author');
        break;

      case 'price':
        this.price = prompt('Please enter a new price');
        break;
      
      case 'publisher':
        this.publisher = prompt('Please enter a new publisher');
        break;
        
      case 'condition':
        this.condition = prompt('Please enter a new condition');
        break;

      case 'desc':
        this.additional_info = prompt('Please enter a new description');
        break;
    }
  }
}

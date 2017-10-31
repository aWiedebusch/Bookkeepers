import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage'


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

  constructor(public navCtrl: NavController, private storage: Storage) {

  }

  add(){
    alert("ISBN is " + this.isbn + 
                "\nTitle is " + this.title +
                "\nGenre is " + this.genre +
                "\nAuthor is " + this.author +
                "\nPrice is $" + this.price +
                "\nPublisher is " + this.publisher +
                "\nCondition is " + this.condition +
                "\nAdditional Info: " + this.additional_info);

    this.storage.set(String(this.isbn), [{
      isbn: this.isbn,
      title: this.title,
      author: this.author,
      genre: this.genre,
      price: this.price,
      publisher: this.publisher,
      condition: this.condition,
      additional_info: this.additional_info
    }])
  }

}
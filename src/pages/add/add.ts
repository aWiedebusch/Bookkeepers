import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';

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
  isbnLookup: any

  constructor(public navCtrl: NavController,
              private storage: Storage,
              private remoteService: RemoteServiceProvider) {

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

  checkISBN() {

    this.remoteService.getBook(this.isbn)
      .subscribe(
        data => {
          if(data) {
            if(data.data[0].title){
              this.title = data.data[0].title
            }
            if(data.data[0].author_data[0]) {
              if(data.data[0].author_data[0].name) {
                this.author = data.data[0].author_data[0].name;
              }
            }
      
            if(data.data[0].publisher_name) {
              this.publisher = data.data[0].publisher_name;
            }
          }
        }
      )

  }

}
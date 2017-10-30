import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage'


@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class AddPage {

  info: any
  // isbn: number
  // title: string
  // genre: string
  // author: string
  // price: number
  // publisher: string
  // condition: string
  // addInfo: string
  //bookInfo: myBook 

  constructor(public navCtrl: NavController, private storage: Storage) {
    this.info.isbn = 0;
    this.info.title = "", 
    this.info.genre = "",
    this.info.author = "",
    this.info.price = 0, 
    this.info.condition = "", 
    this.info.additional_info = ""   
  }

  add(){
    alert("Info: " + this.info)
    // alert("ISBN is " + this.info.isbn + 
    //             "\nTitle is " + this.info.title +
    //             "\nGenre is " + this.genre +
    //             "\nAuthor is " + this.author +
    //             "\nPrice is $" + this.price +
    //             "\nPublisher is " + this.publisher +
    //             "\nCondition is " + this.condition +
    //             "\nAdditional Info: " + this.addInfo);
  }

  // addNewBook(){
    // var newBook = new AddPage();
    // this.isbn = parseInt((<HTMLInputElement>document.getElementById("isbn")).value);
    // this.title = ((<HTMLInputElement>document.getElementById("title")).value);
    // this.genre = ((<HTMLInputElement>document.getElementById("genre")).value);
    // this.author = ((<HTMLInputElement>document.getElementById("author")).value);
    // this.price = parseFloat((<HTMLInputElement>document.getElementById("price")).value);
    // this.publisher = ((<HTMLInputElement>document.getElementById("publisher")).value);
    // if((<HTMLInputElement>document.getElementById("condition")).checked) {
    //   this.condition = ((<HTMLInputElement>document.getElementById("condition")).value);
    // }
    // this.addInfo = ((<HTMLInputElement>document.getElementById("addInfo")).value);

    // alert("ISBN is " + this.isbn + 
    // "\nTitle is " + this.title +
    // "\nGenre is " + this.genre +
    // "\nAuthor is " + this.author +
    // "\nPrice is $" + this.price +
    // "\nPublisher is " + this.publisher +
    // "\nCondition is " + this.condition +
    // "\nAdditional Info: " + this.addInfo);
    
  }

  // store() {
  //   this.storage.set('thing', this.addNewBook())
  // }

  // showNewBookInfo(){
  //   alert("ISBN is " + this.isbn + 
  //         "\nTitle is " + this.title +
  //         "\nGenre is " + this.genre +
  //         "\nAuthor is " + this.author +
  //         "\nPrice is $" + this.price +
  //         "\nPublisher is " + this.publisher +
  //         "\nCondition is " + this.condition +
  //         "\nAdditional Info: " + this.addInfo);
  // }
//}

// class myBook {
//   isbn: number
//   title: string
//   genre: string
//   author: string
//   price: number
//   publisher: string
//   condition: string
//   addInfo: string

//   constructor() {
    // this.isbn = null, 
    // this.title = null, 
    // this.genre = null,
    // this.author = null,
    // this.price = null, 
    // this.condition = null, 
    // this.addInfo = null      
  //}

  // addNewBook(){
  //   this.isbn = parseInt((<HTMLInputElement>document.getElementById("isbn")).value);
  //   console.log((<HTMLInputElement>document.getElementById("isbn")).value)
  //   this.title = ((<HTMLInputElement>document.getElementById("title")).value);
  //   console.log((<HTMLInputElement>document.getElementById("title")).value)
  //   this.genre = ((<HTMLInputElement>document.getElementById("genre")).value);
  //   this.author = ((<HTMLInputElement>document.getElementById("author")).value);
  //   this.price = parseFloat((<HTMLInputElement>document.getElementById("price")).value);
  //   this.publisher = ((<HTMLInputElement>document.getElementById("publisher")).value);
  //   if((<HTMLInputElement>document.getElementById("condition")).checked) {
  //     this.condition = ((<HTMLInputElement>document.getElementById("condition")).value);
  //   }
  //   this.addInfo = ((<HTMLInputElement>document.getElementById("addInfo")).value);
  // }

//   display(){
//     alert("ISBN is " + this.isbn + 
//             "\nTitle is " + this.title +
//             "\nGenre is " + this.genre +
//             "\nAuthor is " + this.author +
//             "\nPrice is $" + this.price +
//             "\nPublisher is " + this.publisher +
//             "\nCondition is " + this.condition +
//             "\nAdditional Info: " + this.addInfo);
//   }
// }

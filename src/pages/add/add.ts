import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';
import { InventoryPage } from '../inventory/inventory';


@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class AddPage {

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
              private remoteService: RemoteServiceProvider,
              private alertCtrl: AlertController) {

  }
  add(){
    if(this.isbn == null) {
      let alert = this.alertCtrl.create({
        title: 'Error:',
        subTitle: 'Please enter a valid ISBN number',
        buttons: ['Dismiss']
      });
      alert.present();
    }
    else if(this.title == '') {
      let alert = this.alertCtrl.create({
        title: 'Error:',
        subTitle: 'Please enter a title',
        buttons: ['Dismiss']
      });
      alert.present();    
    }
    else if(this.author == '') {
      let alert = this.alertCtrl.create({
        title: 'Error:',
        subTitle: 'Please enter an author',
        buttons: ['Dismiss']
      });
      alert.present();
    }
    else if(this.price == null) {
      let alert = this.alertCtrl.create({
        title: 'Error:',
        subTitle: 'Please enter a valid price',
        buttons: ['Dismiss']
      });
      alert.present();
    }
    else if(this.publisher == '') {
      let alert = this.alertCtrl.create({
        title: 'Error:',
        subTitle: 'Please enter a publisher',
        buttons: ['Dismiss']
      });
      alert.present();
    }
    else if(this.genre == '') {
      let alert = this.alertCtrl.create({
        title: 'Error:',
        subTitle: 'Please select a genre. If you cannot find an adequate genre ' +
                  'description, please select \'Other\'',
        buttons: ['Dismiss']
      });
      alert.present();
    }
    else if(this.condition == '') {
      let alert = this.alertCtrl.create({
        title: 'Error:',
        subTitle: 'Please select a condition',
        buttons: ['Dismiss']
      });
      alert.present();
    }
    else{
      let key = String(this.isbn);
      this.storage.get(key).then(data =>
      {
        // If isbn exists in inventory already, add to existing
        if(data)
        {
          // Update existing isbn key here
          data.push({
            isbn: String(this.isbn),
            title: this.title,
            author: this.author,
            genre: this.genre,
            price: this.price,
            publisher: this.publisher,
            condition: this.condition,
            additional_info: this.additional_info
          })
          this.storage.set(String(this.isbn), data)
        }

        // If isbn number doesn't exist already in inventory, add it
        else
        {
          this.storage.set(String(this.isbn), [{
            isbn: String(this.isbn),
            title: this.title,
            author: this.author,
            genre: this.genre,
            price: this.price,
            publisher: this.publisher,
            condition: this.condition,
            additional_info: this.additional_info
          }])
          
        }
        this.navCtrl.setRoot(InventoryPage) 
      })
      
    }
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


    this.remoteService.getPrice(this.isbn)
      .subscribe(
        data => {
            if(data.data[0]) {
              if(data.data[0].price)
                this.price = data.data[0].price
            }
        }
      )
  }
}
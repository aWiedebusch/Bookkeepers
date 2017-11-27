import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Toast } from '@ionic-native/toast';

import { AddPage } from '../add/add';

import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';

@Component({
    selector: 'page-scan-in',
    templateUrl: 'scan-in.html'
})
export class ScanInPage {

    isbn: string
    title: string = ""
    genre: string = ""
    author: string = ""
    price: number = null
    publisher: string = ""
    condition: string = ""
    additional_info: string = ""
    isbnLookup: any

    constructor(public navCtrl: NavController, private scanner: BarcodeScanner,
        private toast: Toast, private remoteService: RemoteServiceProvider) {
    }

    scannedTapped(event) {
        this.navCtrl.setRoot(AddPage)

    }

    scan() {
        this.scanner.scan().then((barcodeData) => {
            this.isbn = barcodeData.text
            this.checkISBN();
            this.toast.show("Successfull", '5000', 'center')
            .subscribe(
            toast => {
              console.log(toast);
            });
        }, (err) => {

        });
    }

    checkISBN() {

        this.remoteService.getBook(this.isbn)
            .subscribe(
            data => {
                if (data) {
                    if (data.data[0].title) {
                        this.title = data.data[0].title
                    }
                    if (data.data[0].author_data[0]) {
                        if (data.data[0].author_data[0].name) {
                            this.author = data.data[0].author_data[0].name;
                        }
                    }

                    if (data.data[0].publisher_name) {
                        this.publisher = data.data[0].publisher_name;
                    }
                }
            }
            )


        this.remoteService.getPrice(this.isbn)
            .subscribe(
            data => {
                if (data.data[0]) {
                    if (data.data[0].price)
                        this.price = data.data[0].price
                }
            }
            )
    }


}

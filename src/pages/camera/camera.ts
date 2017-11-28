import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the CameraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})

export class CameraPage {

  public base64Image: string;
  public photos: any = [];
  
  constructor(public navCtrl: NavController,
      public navParams: NavParams,
      private camera: Camera) {
  
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
  }

  

  takePic() {
    
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {

      //add photo to the array of photos
      this.base64Image = "data:image/jpeg;base64," + imageData;
      this.addPhoto(this.base64Image);

    }, (error) => {
      console.debug("Unable to obtain picture: " + error, "app");
      console.log(error);
    });
  }

  addPhoto(photo) {
    this.photos.push(photo);
    this.photos.reverse();
  }
  
}





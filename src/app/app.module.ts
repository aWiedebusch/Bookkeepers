import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule} from '@angular/http';

import { AboutPage } from '../pages/about/about';
import { CameraPage } from '../pages/camera/camera';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { BookPage } from '../pages/book/book';
import { InventoryPage } from '../pages/inventory/inventory';
import { AddPage } from '../pages/add/add';
import { SearchPage } from '../pages/search/search';

import { ISBNPipe } from '../pages/inventory/pipe';
import { DeepPipe } from '../pages/inventory/deep_pipe';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { RemoteServiceProvider } from '../providers/remote-service/remote-service';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    CameraPage,
    ContactPage,
    HomePage,
    TabsPage,
    BookPage,
    InventoryPage,
    AddPage,
    SearchPage,
    ISBNPipe,
    DeepPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    CameraPage,
    ContactPage,
    HomePage,
    TabsPage,
    BookPage,
    InventoryPage,
    AddPage,
    SearchPage
  ],
  providers: [
    Camera,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RemoteServiceProvider
  ]
})
export class AppModule {}

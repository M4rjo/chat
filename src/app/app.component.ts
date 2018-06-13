import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import { SigninPage } from '../pages/signin/signin';

const config = {
    apiKey: 'AIzaSyBeBtKOZrZsqjvDaSHcMmAnsTOGrLohVnY',
    authDomain: 'chat-31929.firebaseapp.com',
    databaseURL: 'https://chat-31929.firebaseio.com',
    projectId: 'chat-31929',
    storageBucket: 'chat-31929.appspot.com',
   };

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SigninPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
     
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}

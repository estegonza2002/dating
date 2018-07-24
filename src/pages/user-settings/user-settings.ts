import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AaaPagesPage } from '../aaa-pages/aaa-pages';


@IonicPage()
@Component({
  selector: 'page-user-settings',
  templateUrl: 'user-settings.html',
})
export class UserSettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openAaaPagesPage(){
    this.navCtrl.push(AaaPagesPage)
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad UserSettingsPage');
  }

}

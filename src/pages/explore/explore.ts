import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UserSettingsPage } from '../user-settings/user-settings';


@IonicPage()
@Component({
  selector: 'page-explore',
  templateUrl: 'explore.html',
})
export class ExplorePage {
  root = 'ExplorePage';

  users : any[]=[]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.users.push(1);
    this.users.push(2);
    this.users.push(3);
    this.users.push(4);
    this.users.push(5);
    this.users.push(6);
  }

  openUserSettingsPage(){
    this.navCtrl.push(UserSettingsPage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExplorePage');
  }

}

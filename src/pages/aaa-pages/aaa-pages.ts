import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { UserSettingsPage } from '../user-settings/user-settings';
import { UserSignupPage } from '../user-signup/user-signup';
import { UserForgotPage } from '../user-forgot/user-forgot';
import { UserLoginPage } from '../user-login/user-login';
import { TabsPage } from '../tabs/tabs';
import { ExplorePage } from '../explore/explore';
import { ConnectPage } from '../connect/connect';
import { EventsPage } from '../events/events';

@IonicPage()
@Component({
  selector: 'page-aaa-pages',
  templateUrl: 'aaa-pages.html',
})
export class AaaPagesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }
  openUserSettingsPage(){
    this.navCtrl.push(UserSettingsPage)
  }
  openUserSignupPage(){
    this.navCtrl.push(UserSignupPage)
  }
  openUserForgotPage(){
    this.navCtrl.push(UserForgotPage)
  }
  openUserLoginPage(){
    this.navCtrl.push(UserLoginPage)
  }
  openTabsPage(){
    this.navCtrl.push(TabsPage)
  }
  openExplorePage(){
    this.navCtrl.push(ExplorePage)
  }
  openConnectPage(){
    this.navCtrl.push(ConnectPage)
  }
  openEventsPage(){
    this.navCtrl.push(EventsPage)
  }
  // openNotificationModal() {
  //   let modal = this.modalCtrl.create(NotificationPage);
  //   modal.present();
  // }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AaaPagesPage');
  }

}

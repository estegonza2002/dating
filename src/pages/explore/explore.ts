import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// Import pages here
import { UserDetailPage } from '../user-detail/user-detail';


@IonicPage()
@Component({
  selector: 'page-explore',
  templateUrl: 'explore.html',
})
export class ExplorePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openUserDetailPage(){
    this.navCtrl.push(UserDetailPage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExplorePage');
  }

}

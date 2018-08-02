import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-nav',
  templateUrl: 'nav.html',
})
export class NavPage {

  root = 'ExplorePage'

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  open(pageName) {
    this.root = pageName;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NavPage');
  }

}

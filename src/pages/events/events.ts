import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { EventAePage } from '../event-ae/event-ae';

/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {

  events : any[]=[]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.events.push(1);
    this.events.push(2);
    this.events.push(3);
    this.events.push(4);
    this.events.push(5);
    this.events.push(6);
  }
  openEventAePage(){
    this.navCtrl.push(EventAePage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
  }

}

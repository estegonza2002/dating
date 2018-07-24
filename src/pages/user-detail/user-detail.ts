import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ViewController } from 'ionic-angular';
import { ProfilePopoverComponent } from '../../components/profile-popover/profile-popover';
/**
 * Generated class for the UserDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-detail',
  templateUrl: 'user-detail.html',
})
export class UserDetailPage {

  users : any[]=[]
  events : any[]=[]

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController, public viewCtrl: ViewController) {
    this.users.push(1);
    this.users.push(2);
    this.users.push(3);
    this.users.push(4);
    this.users.push(5);
    this.users.push(6);
    this.events.push(1);
    this.events.push(2);
    this.events.push(3);
    this.events.push(4);
  }
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(ProfilePopoverComponent, {showBackdrop: true, enableBackdropDismiss: true});
    popover.present({
      ev: myEvent
    });
  }
  close() {
    this.viewCtrl.dismiss();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad UserDetailPage');
  }

}

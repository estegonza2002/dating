import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// Import pages here
import { UserDetailPage } from '../../pages/user-detail/user-detail';

/**
 * Generated class for the UserComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'user',
  templateUrl: 'user.html'
})
export class UserComponent {

  text: string;

  constructor(public navCtrl: NavController) {
    console.log('Hello UserComponent Component');
    this.text = 'Hello World';
  }
  openUserDetailPage(){
    this.navCtrl.push(UserDetailPage)
  }
}

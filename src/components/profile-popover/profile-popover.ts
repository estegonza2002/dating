import { Component } from '@angular/core';

/**
 * Generated class for the ProfilePopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'profile-popover',
  templateUrl: 'profile-popover.html'
})
export class ProfilePopoverComponent {

  text: string;

  constructor() {
    console.log('Hello ProfilePopoverComponent Component');
    this.text = 'Hello World';
  }

}

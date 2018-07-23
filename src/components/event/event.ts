import { Component } from '@angular/core';

/**
 * Generated class for the EventComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'event',
  templateUrl: 'event.html'
})
export class EventComponent {

  text: string;

  constructor() {
    console.log('Hello EventComponent Component');
    this.text = 'Hello World';
  }

}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventAePage } from './event-ae';

@NgModule({
  declarations: [
    EventAePage,
  ],
  imports: [
    IonicPageModule.forChild(EventAePage),
  ],
})
export class EventAePageModule {}

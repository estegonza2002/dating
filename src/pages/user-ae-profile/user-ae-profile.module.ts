import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserAeProfilePage } from './user-ae-profile';

@NgModule({
  declarations: [
    UserAeProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(UserAeProfilePage),
  ],
})
export class UserAeProfilePageModule {}

import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// Import pages here
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { ExplorePage } from '../pages/explore/explore';
import { ConnectPage } from '../pages/connect/connect';
import { EventsPage } from '../pages/events/events';
import { EventAePage } from '../pages/event-ae/event-ae';
import { UserDetailPage } from '../pages/user-detail/user-detail';
import { UserSettingsPage } from '../pages/user-settings/user-settings';
import { UserLoginPage } from '../pages/user-login/user-login';
import { UserSignupPage } from '../pages/user-signup/user-signup';
import { UserForgotPage } from '../pages/user-forgot/user-forgot';
import { AaaPagesPage } from '../pages/aaa-pages/aaa-pages';

import { TabsPage } from '../pages/tabs/tabs';

import { EventComponent } from '../components/event/event';
import { UserComponent } from '../components/user/user';
import { ProfilePopoverComponent } from '../components/profile-popover/profile-popover';


import { IonicImageViewerModule } from 'ionic-img-viewer';
import { ElasticHeaderModule } from "ionic2-elastic-header/dist";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    ExplorePage,
    ConnectPage,
    EventsPage,
    EventAePage,
    UserDetailPage,
    UserSettingsPage,
    UserLoginPage,
    UserSignupPage,
    UserForgotPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    EventComponent,
    ProfilePopoverComponent,
    AaaPagesPage,
    UserComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      mode:'ios'
    }),
    IonicImageViewerModule,
    ElasticHeaderModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ExplorePage,
    ConnectPage,
    EventsPage,
    EventAePage,
    UserDetailPage,
    UserSettingsPage,
    UserLoginPage,
    UserSignupPage,
    UserForgotPage,
    AboutPage,
    ContactPage,
    HomePage,
    AaaPagesPage,
    ProfilePopoverComponent,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

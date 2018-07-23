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
import { UserDetailPage } from '../pages/user-detail/user-detail';

import { TabsPage } from '../pages/tabs/tabs';

import { EventComponent } from '../components/event/event';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    ExplorePage,
    ConnectPage,
    EventsPage,
    UserDetailPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    EventComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      mode:'ios'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ExplorePage,
    ConnectPage,
    EventsPage,
    UserDetailPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

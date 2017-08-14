import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { TaskPage } from '../pages/task/task.component';
import { TaskDetailPage } from '../pages/task-detail/task-detail';
import { AccountPage } from '../pages/account/account.component';

@NgModule({
  declarations: [
    MyApp
    , TabsPage
    , HomePage
    , TaskPage
    , TaskDetailPage
    , AccountPage
  ],
  imports: [
    BrowserModule
    , HttpModule
    , IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
    , TabsPage
    , HomePage
    , TaskPage
    , TaskDetailPage
    , AccountPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }

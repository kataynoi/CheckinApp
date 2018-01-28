import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Toast } from '@ionic-native/toast';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MainPage } from '../pages/main/main';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingPage } from '../pages/setting/setting';
import { ClassroomPage } from '../pages/classroom/classroom';
import { TeacherPage } from '../pages/teacher/teacher';
import { CheckinPage } from '../pages/checkin/checkin';
import { CreateClassPage } from '../pages/create-class/create-class';

import { DataServiceProvider } from '../providers/data-service/data-service';
import { UserProvider } from '../providers/user/user';
import { LoginProvider } from '../providers/login/login';
import { ClassroomProvider } from '../providers/classroom/classroom';
import { CheckinProvider } from '../providers/checkin/checkin';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainPage,
    LoginPage,
    TabsPage,
    SettingPage,
    ClassroomPage,
    TeacherPage,
    CheckinPage,
    CreateClassPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MainPage,
    LoginPage,
    TabsPage,
    SettingPage,
    ClassroomPage,
    TeacherPage,
    CheckinPage,
    CreateClassPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide:'API_URL',useValue:'http://192.168.1.7:8888'},
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner,
    Toast,
    DataServiceProvider,
    UserProvider,
    LoginProvider,
    ClassroomProvider,
    CheckinProvider
  ]
})
export class AppModule {}

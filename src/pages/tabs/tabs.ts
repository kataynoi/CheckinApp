import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { SettingPage } from '../setting/setting';
import { ClassroomPage } from '../classroom/classroom';
import { TeacherPage } from '../teacher/teacher';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tabTeacher: any;
  tabClassroom: any;
  tabSetting: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tabTeacher = TeacherPage;
    this.tabClassroom = ClassroomPage;
    //this.tabSetting = SettingPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}

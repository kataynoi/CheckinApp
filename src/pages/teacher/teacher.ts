import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,Events,App} from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
/**
 * Generated class for the TeacherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teacher',
  templateUrl: 'teacher.html',
})
export class TeacherPage {
  Teacher: object;
  
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public events: Events ,
    public app:App
  )
  {
    this.Teacher = {
      Name_Teacher: localStorage.getItem('name'), ID_Teacher: localStorage.getItem('id'
      ), Subject: localStorage.getItem('subject'), Faculty: localStorage.getItem('faculty')
    }

  }

  logout() {
    localStorage.removeItem('id');
    let nav = this.app.getRootNav();
    nav.setRoot(LoginPage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TeacherPage');
  }

}

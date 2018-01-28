import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';
import { LoginProvider } from '../../providers/login/login';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username: string;
  password: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loginProvider: LoginProvider) {
    
  }
  doLogin() { 
    this.loginProvider.doLogin(this.username, this.password)
      .then((data: any) => {
        if (data.success) { 
          let id = data.rows.id;
          let name = data.name
          console.log("ID : "+id);
          localStorage.setItem('id', id);
          localStorage.setItem('name', data.rows.name);
          localStorage.setItem('subject', data.rows.subject);
          localStorage.setItem('faculty', data.rows.faculty);
          this.navCtrl.setRoot(TabsPage);
        }
      }, (error) => { 
        alert('Login Fail')
      })

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}

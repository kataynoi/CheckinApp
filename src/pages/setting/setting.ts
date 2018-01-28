import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController} from 'ionic-angular';

// Provider
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
user
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public userProvider: UserProvider,
    public loadCtrl : LoadingController
  
  ) {

  }

  ionViewWillEnter() {
    let loader = this.loadCtrl.create({ content: 'Loading....', spinner: 'dots' });
    loader.present();
    this.userProvider.getUsers()
      .then((data) => { 
        loader.dismiss();
        console.log(data);

      }
      , (error) => { 
        loader.dismiss();
      })
    console.log('ionViewDidLoad SettingPage');
  }

}

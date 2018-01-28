import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CheckinPage } from '../../pages/checkin/checkin';
import { HomePage } from '../../pages/home/home';

/**
 * Generated class for the CreateClassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-class',
  templateUrl: 'create-class.html',
})
export class CreateClassPage {
  create_class: Array<{ID_create_class:string, ID_Class:string,Course:string, Date_create:string }>=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.create_class.push({ ID_create_class: '3', ID_Class: '3',Course:'เทคโนโลยีเว็บ', Date_create: '2017-01-01 16:00' });
    this.create_class.push({ ID_create_class: '2', ID_Class: '5',Course:'เทคโนโลยีเว็บ2', Date_create: '2017-01-01 16:00' });
  }
  goCheckin(classroom) { 
    this.navCtrl.push(HomePage, classroom);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateClassPage');
  }

}

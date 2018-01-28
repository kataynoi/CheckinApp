import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { CheckinProvider } from '../../providers/checkin/checkin';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Toast } from '@ionic-native/toast';

/**
 * Generated class for the CheckinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-checkin',
  templateUrl: 'checkin.html',
})
export class CheckinPage {
  ID_Class: string;
  ID_create_class: string;
  ID_Std: string;
  studentCheckin: Array<any> = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadCtrl: LoadingController,
    public checkinPro: CheckinProvider,
    private barcodeScanner: BarcodeScanner,
    private toast: Toast,
  ) {

    let create_class = this.navParams.get('create_class');
    console.log(create_class);
    this.ID_Class = create_class.ID_Class;
    this.ID_create_class = create_class.ID_create_class;
    console.log('ID_Class ' + this.ID_Class+' Create '+this.ID_create_class)
  }
  scan() {
    //this.selectedProduct = {};
    this.barcodeScanner.scan().then((barcodeData) => {
      console.log('Barcode : ' + barcodeData.text);
      this.ID_Std = barcodeData.text
      //alert(barcodeData.text);


// Scan true 
this.checkinPro.setStudentCheckin(this.ID_create_class,this.ID_Std)
.then((data: any) => {
  if (data.success) { 
    console.log(data);
    this.ionViewWillEnter();
  }
}, (error) => { 
  console.log('Load Fail');
})      
//End       


    }, (err) => {
      this.toast.show(err, '5000', 'center').subscribe(
        toast => {
          console.log(toast);
        }
      );
    });
  }
  
  ionViewWillEnter() {
    let loader = this.loadCtrl.create({ content: 'Loading....', spinner: 'dots' });
    loader.present();
    this.checkinPro.getStudentCheckin(this.ID_Class,this.ID_create_class)
      .then((data: any) => {
        if (data.success) { 
          console.log(data);
          loader.dismiss();
          let rows = data.rows
          this.studentCheckin = data.rows;
        }
      }, (error) => { 
        console.log('Load Fail');
      })

  }

}

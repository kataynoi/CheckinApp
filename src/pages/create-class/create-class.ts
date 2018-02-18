import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController,AlertController} from 'ionic-angular';
import { CheckinPage } from '../../pages/checkin/checkin';
import { HomePage } from '../../pages/home/home';
import { ClassroomProvider } from '../../providers/classroom/classroom';

@IonicPage()
@Component({
  selector: 'page-create-class',
  templateUrl: 'create-class.html',
})
export class CreateClassPage {
  ID_Class: string;
  create_class: Array<any> = [];
  //create_class: Array<{ID_create_class:string, ID_Class:string,Course:string, Date_create:string }>=[];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public classPro: ClassroomProvider,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController
  ) {

    let classroom = this.navParams.get('classroom');
    this.ID_Class = classroom.ID_Class;
    console.log('ID_Class ' + this.ID_Class)
    
    //Confirm


    //Conf
  }
  goCheckin(create_class:any) { 
    this.navCtrl.push(CheckinPage, { create_class:create_class});
  }
  createPeriod() { 
//Confirm
          let alert = this.alertCtrl.create({
            title: 'ยืนยันการสร้างคาบเรียน',
            message: 'คุณต้องการสร้างคาบเรียน?',
            buttons: [
              {
                text: 'ยกเลิก',
                role: 'cancel',
                handler: () => {
                  console.log('Cancel clicked');
                }
              },
              {
                text: 'สร้างคาบเรียน',
                handler: () => {
                  console.log('Buy clicked');
                  this.classPro.createPreroid(this.ID_Class)
                  .then((data: any) => {
                    if (data.success) { 
                      this.ionViewWillEnter();
                      console.log(data);
                      //this.getCreateClass();
                    }
                    }, (error) => { 
                    this.ionViewWillEnter();
                    console.log('Load Fail');
                  })

                }
              }
            ]
          });
          alert.present();    
          //Confirm    

  }


  ionViewWillEnter() {
    let loader = this.loadCtrl.create({ content: 'Loading....', spinner: 'dots' });
    loader.present();
    this.classPro.getCreateClass(this.ID_Class)
      .then((data: any) => {
        if (data.success) { 
          console.log(data);
          loader.dismiss();
//        let rows = data.rows
          this.create_class = data.rows;
        } else {
          loader.dismiss();
        }
      }, (error) => { 
        loader.dismiss();
        console.log('Load Fail');
      })

  
}

}

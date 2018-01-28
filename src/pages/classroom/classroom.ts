import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CreateClassPage } from '../../pages/create-class/create-class';
import { ClassroomProvider } from '../../providers/classroom/classroom';
import { ClassProvider } from '@angular/core/src/di/provider';
/**
 * Generated class for the ClassroomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-classroom',
  templateUrl: 'classroom.html',
})
export class ClassroomPage {
  classLists: Array<any> = [];
  id : string = localStorage.getItem('id')
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public classroom :ClassroomProvider
  ) {
    
  }
  goCreate(classroom) { 
    this.navCtrl.push(CreateClassPage, classroom);
  }

  ionViewWillEnter() {
   
      this.classroom.getClassroom(this.id)
        .then((data: any) => {
          if (data.success) { 
            console.log(data);
            let rows = data.rows
            this.classLists = data.rows;
          }
        }, (error) => { 
          console.log('Load Fail');
        })
  
    
  }

}

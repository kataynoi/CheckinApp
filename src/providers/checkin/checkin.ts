import { Injectable, Inject } from '@angular/core';
import { Http ,Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the CheckinProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CheckinProvider {

  constructor(public http: Http,@Inject('API_URL') public url:string) {
    
  }
 
 
 getStudentCheckin (ID_Class: string,ID_create_class) { 
    return new Promise((resolve, reject) => { 
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let body = { ID_Class: ID_Class,ID_create_class:ID_create_class};

      //this.http.post(`${this.url}/users/login`, body, options)

      this.http.post(this.url+'/service/getStudentCheckin',body,options)
        .map(res => res.json())
        .subscribe(data => { 
          resolve(data);
        }, error => { 
          reject(error);
        })
    });{

     }
 }
  setStudentCheckin(ID_create_class:string, ID_Std:string) { 


    return new Promise((resolve, reject) => { 
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let body = { ID_create_class: ID_create_class, ID_Std : ID_Std};

      //this.http.post(`${this.url}/users/login`, body, options)

      this.http.post(this.url+'/service/checkinStudent',body,options)
        .map(res => res.json())
        .subscribe(data => { 
          resolve(data);
        }, error => { 
          reject(error);
        })
    });{

     }
  }  
}

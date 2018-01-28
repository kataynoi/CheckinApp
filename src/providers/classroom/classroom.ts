import { Injectable,Inject } from '@angular/core';
import { Http ,Headers, RequestOptions  } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ClassroomProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ClassroomProvider {

  constructor(public http: Http,@Inject('API_URL') public url:string) {
    
  }

getClassroom(username:string) { 
    return new Promise((resolve, reject) => { 
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let body = { id: username};

      //this.http.post(`${this.url}/users/login`, body, options)

      this.http.post(this.url+'/service/getClassroom',body,options)
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

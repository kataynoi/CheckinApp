import { Injectable,Inject } from '@angular/core';
import { Http ,Headers, RequestOptions  } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ClassroomProvider {

  constructor(public http: Http,@Inject('API_URL') public url:string) {
    
  }
  createPreroid(ID_class:string) { 
    return new Promise((resolve, reject) => { 
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let body = { ID_Class: ID_class};

      //this.http.post(`${this.url}/users/login`, body, options)

      this.http.post(this.url+'/service/createPeriod',body,options)
        .map(res => res.json())
        .subscribe(data => { 
          resolve(data);
        }, error => { 
          reject(error);
        })
    });{

     }
}

  //getCheckinClass
getClassroom(id:string) { 
    return new Promise((resolve, reject) => { 
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let body = { id: id};

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

getCreateClass(ID_Class:string) { 
  return new Promise((resolve, reject) => { 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = { ID_Class: ID_Class};

    this.http.post(this.url+'/service/getCreateClass',body,options)
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

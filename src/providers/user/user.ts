import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import 'rxjs/add/operator/map';
//import { ReflectiveInjector } from '@angular/core/src/di/reflective_injector';



@Injectable()
export class UserProvider {
  url: string = 'http://192.168.1.7:8888/index.php/service/'
  constructor(public http: Http) {
    console.log('Hello UserProvider Provider');
  }
  getUsers() { 
    return new Promise((resolve, reject) => { 
      this.http.get(this.url)
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

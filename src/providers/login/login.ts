import { Injectable ,Inject} from '@angular/core';
import { Http ,Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {
  //url: string = 'http://192.168.1.7:8888/index.php/service/'
  constructor(public http: Http,@Inject('API_URL') public url:string) {
    
  }


  doLogin(username:string,password:string) { 
    return new Promise((resolve, reject) => { 
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let body = { username: username, password: password };

      //this.http.post(`${this.url}/users/login`, body, options)

      this.http.post(this.url+'/service/do_login',body,options)
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

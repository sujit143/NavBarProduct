import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  url: string = 'https://cd0c4b97.ngrok.io/api/Settings/GetDesignations';

  constructor(private _http: HttpClient, private _router: Router) {}

  getAllEmployee() {
    return this._http.get(this.url);
  }
  currentUser;
  redirectURL: string;
  login(user_email: string, user_password: string) {
    // debugger;
    if (user_email =='sujit' && user_password == '143') {

  this._router.navigate(['/emp']);
} else {
  this._router.navigate(['']);

  }
}
  logout() {
    this.currentUser = null;
    this.redirectURL = '';
    this._router.navigate(['']);
  }
  get isLoggedIn(): boolean {
    return !!this.currentUser;
  }
}

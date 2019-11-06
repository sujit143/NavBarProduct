import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  login: FormGroup;
  constructor( private fb: FormBuilder,
    private _userdata: UserdataService,
    private _router: Router) {}

  ngOnInit() {
    this.login = this.fb.group({
      user_email: new FormControl(),
      user_password: new FormControl()
    });
   }
   onLoginSubmit() {
    alert(this.login.value.user_email);
    this._userdata.login(
      this.login.value.user_email,
      this.login.value.user_password
    );

   }
  }



import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AllService } from '../../all.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  users: any;
  flag: boolean=false;
  constructor(private _fb: FormBuilder,
    private _ser: AllService,
    private r: Router) {
 
      this.loginForm = this._fb.group({
      user: ['', [Validators.required,
      Validators.pattern("[A-Za-z0-9]{3,}[@]{1}[A-Za-z0-9]{3,}[.]{1}[A-Za-z0-9]{3,}")]],
      password: ['', [Validators.required]],

    });

  }
  OnSave(data) {


    this._ser.getUsers().subscribe((getuserresponse) => {
      this.users = getuserresponse;
      // console.log(this.users);
      var len1 = Object.keys(this.users).length;
      // console.log(len1);
      for (var i = 0; i < (len1); i++) {
        // console.log(this.users[i])
        if ((data.user == this.users[i].name) && (data.password == this.users[i].pass)) {
          this.flag = true;
        }

      }
      if(this.flag==true) {
        alert("login successful");
        this.r.navigate(['/dashboard']);
      }
      else {
        alert("Not a registered user, please register");
        this.r.navigate(['/register']);
      }
    });


  }
  ngOnInit() {
  }

}
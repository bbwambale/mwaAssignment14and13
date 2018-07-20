import { Component } from '@angular/core';
import {ApiService} from './api.service';

@Component({
  selector: 'login',
  template: `
  <form class="example-form">
  <mat-card>
    <h4>Login Here</h4>
  <mat-form-field class="uname" type="text">
    <input matInput [(ngModel)]= "loginData.username" name="username" placeholder="Username">
  </mat-form-field>
  <br>
  <mat-form-field class="pswd">
  <input matInput [(ngModel)]= "loginData.password" name="password" placeholder="Password" type="password">
</mat-form-field>

<br>


<button mat-raised-button color="primary" (click) = "posts()" >Login</button>  
</mat-card>
</form>
  `,
 
})
export class LoginComponent {
    loginData = {};

    constructor(private apiService: ApiService){}

    posts(){
   
        this.apiService.loginUser(this.loginData);
    }
}

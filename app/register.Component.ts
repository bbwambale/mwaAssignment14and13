import { Component } from '@angular/core';
import {ApiService} from './api.service';

@Component({
  selector: 'register',
  template: `
  <form class="example-form">
  <mat-card>
    <h4>Register New User</h4>
  <mat-form-field class="uname" type="text">
    <input matInput [(ngModel)]= "registerData.username" name="username" placeholder="Username">
  </mat-form-field>
  <br>
  <mat-form-field class="pswd">
  <input matInput [(ngModel)]= "registerData.password" name="password" placeholder="Password" type="password">
</mat-form-field>

<br>


<button mat-raised-button color="primary" (click) = "posts()" >Register</button>  
</mat-card>
</form>
  `,
 
})
export class RegisterComponent {
    registerData = {};

    constructor(private apiService: ApiService){}

    posts(){
        console.log(this.registerData);
        this.apiService.sendUserRegistration(this.registerData);
    }
}

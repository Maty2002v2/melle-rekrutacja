import { Component, Input } from '@angular/core';

@Component({
  selector: 'user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.css'],
})
export class UserLoginFormComponent {
  userEmail: string = '';
  userPassword: string = '';
}

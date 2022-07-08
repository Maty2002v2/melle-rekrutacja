import { Component, Input } from '@angular/core';

@Component({
  selector: 'user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css'],
})
export class UserAccountComponent {
  @Input() userList: string[] = [];

  removeUser(index: number): void {
    this.userList.splice(index, 1);
  }
}

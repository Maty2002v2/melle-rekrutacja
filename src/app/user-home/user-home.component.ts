import { Component, Input } from '@angular/core';

@Component({
  selector: 'user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css'],
})
export class UserHomeComponent {
  @Input() userList: string[] = [];

  removeUser(index: number): void {
    this.userList.splice(index, 1);
  }
}

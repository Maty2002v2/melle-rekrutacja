import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  @Input() userList: string[] = [];

  removeUser(index: number): void {
    this.userList.splice(index, 1);
  }
}

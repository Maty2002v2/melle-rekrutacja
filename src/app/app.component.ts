import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  users: string[] = ['Janek', 'Wiktor', 'Karol', 'Arek'];

  onUserCreated(name: string): void {
    const userExist = this.users.find((user) => user === name);

    if (!userExist) {
      this.users.push(name);
    }
  }
}

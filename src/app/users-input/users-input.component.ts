import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './users-input.component.html',
  styleUrls: ['./users-input.component.css'],
})
export class UserInputComponent {
  enteredUserFirstName: string = '';
  enteredUserLastName: string = '';

  onCreateUser(): void {
    let enteredUserFullName: string = `${this.enteredUserFirstName} ${this.enteredUserLastName}`;

    this.userCreated.emit(enteredUserFullName);
    this.enteredUserFirstName = '';
    this.enteredUserLastName = '';
  }

  @Output() userCreated = new EventEmitter<string>();
}

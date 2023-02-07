import { Component } from '@angular/core';

@Component({
  selector: 'app-usertag',
  templateUrl: './usertag.component.html',
  styleUrls: ['./usertag.component.css']
})
export class UsertagComponent {
  username = 'Not set';
  usernameCreationStatus = 'Username was not set';
  allowUsernameUpdate = true;

  blankNameCheck() {
    if ((<HTMLInputElement>event.target).value != '')
    this.allowUsernameUpdate = false;

  }

  onUpdateUsername(event: any) {
     {
      this.username = (<HTMLInputElement>event.target).value;
    }
  }

  onCreateUsername() {
    this.usernameCreationStatus = 'Username was created! Name is [' + this.username + ']';
  }
}

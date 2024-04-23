import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-read-user',
  template: `
  <ul>
    @for (name of userService.users; track name) {
      <li>{{name}}</li>
    }
  </ul>
  `
})
export class ReadUserComponent {
  constructor(public userService: UserService){}

}

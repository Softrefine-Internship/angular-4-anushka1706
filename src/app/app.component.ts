import { Component, OnInit } from '@angular/core';
import { UserData } from './users.service';
import { UsersComponent } from "./users/users.component";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UserData]
})
export class AppComponent {
}

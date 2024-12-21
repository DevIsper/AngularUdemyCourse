import {Component} from '@angular/core';
import { HeaderComponent } from "./core/components/header/header.component";
import { UserComponent } from './core/components/user/user.component';
import { DUMMY_USERS } from './dummy-users';
import {TasksComponent} from './core/components/tasks/tasks.component';
import {UserModel} from './core/models/user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  users = DUMMY_USERS;
  taskObject? : UserModel;

  onSelectUser(id : string) {
    this.taskObject = this.onSelectUserPassid(id);
  }

  onSelectUserPassid(id : string) {
    return this.users.find(user => user.id === id);
  }
}

import {Component, EventEmitter, Input, Output, output} from '@angular/core';

import { DUMMY_USERS } from '../../../dummy-users';
import { UserModel } from '../../models/user.model';
import {TaskModel} from '../../models/task.model';
import {CardComponent} from '../../../shared/components/card/card.component';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})

export class UserComponent {
  @Input({required : true}) user! : UserModel;
  @Input({required:true}) selected!: boolean;
  @Output() onSelect = new EventEmitter<string>();

  get imagePath() {
    return '../../../../assets/users/' + this.user.avatar;
  }

  emitSelectedUser() {
    this.onSelect.emit(this.user.id);
  }
}

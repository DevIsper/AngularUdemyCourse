import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TaskModel} from '../../../models/task.model';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [
    DatePipe
  ],
  templateUrl: './task.component.html',
  standalone: true,
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input({required:true}) task!: TaskModel;
  @Output() taskDeleted = new EventEmitter<TaskModel>();

  taskDeletedEmitter() {
    this.taskDeleted.emit(this.task);
  }

}

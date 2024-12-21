import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {TaskComponent} from './task/task.component';
import {TaskData, TaskModel} from '../../models/task.model';
import {FormsModule} from '@angular/forms';
import {CreateTaskComponent} from './create-task/create-task.component';
import {CardComponent} from '../../../shared/components/card/card.component';
import {TasksService} from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, FormsModule, CreateTaskComponent, CardComponent],
  templateUrl: './tasks.component.html',
  standalone: true,
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {

  constructor(private tasksService: TasksService) {}

  @Input({required: true}) name?: string;
  @Input({required: true}) id! : string;
  isAddingTask = false;

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.id);
  }

  deleteTask(task : TaskModel) {
    this.tasksService.deleteTask(task);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  setIsAddingTask() {
    this.isAddingTask = !this.isAddingTask;
  }
}

import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TaskData} from '../../../models/task.model';
import {TasksService} from '../tasks.service';

@Component({
  selector: 'app-create-task',
  imports: [
    FormsModule
  ],
  templateUrl: './create-task.component.html',
  standalone: true,
  styleUrl: './create-task.component.scss'
})
export class CreateTaskComponent {

  private tasksService = inject(TasksService);

  @Input({required: true}) userId! : string;
  @Output() close = new EventEmitter<void>();

  enteredTitle = "";
  enteredDate = "";
  enteredSummary = "";

  closeEventEmitter() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask({
      title: this.enteredTitle, summary: this.enteredSummary, date: this.enteredDate
    }, this.userId)
    this.closeEventEmitter();
  }
}

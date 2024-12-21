import {TaskData, TaskModel} from '../../models/task.model';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class TasksService {

  private dummyTasks : TaskModel[] = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
    {
      id: 't4',
      userId: 'u2',
      title: 'Write documentation',
      summary: 'Write user documentation for the new product features.',
      dueDate: '2024-07-01',
    },
    {
      id: 't5',
      userId: 'u1',
      title: 'Refactor login module',
      summary: 'Improve the login module code quality and performance.',
      dueDate: '2024-06-25',
    },
    {
      id: 't6',
      userId: 'u4',
      title: 'Conduct user interviews',
      summary: 'Interview 5 users for the upcoming UX research.',
      dueDate: '2024-07-10',
    },
    {
      id: 't7',
      userId: 'u5',
      title: 'Review pull requests',
      summary: 'Review and merge all pending pull requests in the repo.',
      dueDate: '2024-06-05',
    },
    {
      id: 't8',
      userId: 'u3',
      title: 'Create a project roadmap',
      summary: 'Create a roadmap for the next 6 months of the project.',
      dueDate: '2024-06-30',
    },
    {
      id: 't9',
      userId: 'u2',
      title: 'Test new features',
      summary: 'Test new features developed by the team and report any bugs.',
      dueDate: '2024-06-20',
    },
    {
      id: 't10',
      userId: 'u4',
      title: 'Prepare demo presentation',
      summary: 'Create a presentation for the upcoming client demo.',
      dueDate: '2024-07-15',
    },
    {
      id: 't11',
      userId: 'u1',
      title: 'Deploy staging environment',
      summary: 'Deploy the latest build to the staging server for testing.',
      dueDate: '2024-06-18',
    },
    {
      id: 't12',
      userId: 'u5',
      title: 'Optimize database queries',
      summary: 'Optimize the database queries to improve the app performance.',
      dueDate: '2024-07-05',
    },
  ]

  getUserTasks(userId: string): TaskModel[] {
    return this.dummyTasks.filter((task) => task.userId === userId);
  }

  addTask(taskData : TaskData, userId: string) {
    this.dummyTasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
  }

  deleteTask(task : TaskModel) {
    this.dummyTasks = this.dummyTasks.filter((t) => t.id !== task.id);
  }
}

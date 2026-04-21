import { Component } from '@angular/core';
import {Router, RouterLink } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-create-task',
  standalone:true,
  imports: [RouterLink, FormsModule],
  templateUrl: './create-task.html',
  styleUrl: './create-task.css',
})
export class CreateTask {
  title: string = '';
  description: string = '';
  dueDate: string = '';
  priority: 'low' | 'medium' |'high' = 'medium';

  constructor(
    private taskService: TaskService,
    private router:Router

  ) {}

  createTask(): void {
    if(!this.title.trim()) {
      return;
    }

    const newTask: Task = {
      id: Date.now(),
      title: this.title,
      description: this.description,
      completed: false,
      dueDate: this.dueDate,
      priority: this.priority,
    };

    this.taskService.addTask(newTask);

    this.title = '',
    this.description = '';
    this.dueDate = '',
    this.priority = 'medium';

    this.router.navigate(['/tasks']);

  }


}

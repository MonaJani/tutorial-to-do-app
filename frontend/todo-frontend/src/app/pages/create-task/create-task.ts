import { Component } from '@angular/core';
import {Router, RouterLink } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';


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
  done: boolean = false;

  constructor(
    private taskService: TaskService,
    private router:Router

  ) {}

 createTask(): void {
  console.log('1 - Methode wurde ausgelöst');

  if (!this.title.trim()) {
    console.log('2 - Titel ist leer');
    return;
  }

    const newTask = {
      title: this.title,
      description: this.description,
      dueDate: this.dueDate,
      priority: this.priority,
      done: this.done
    };

    console.log('3 - Task wird gesendet:', newTask);

    this.taskService.createTask(newTask).subscribe({
      next: (response: any) => {
        console.log('4 - Erfolg vom Backend', response);
        console.log('Task erstellt:', response);
        this.title = '';
        this.description = '';
        this.dueDate = '';
        this.priority = 'medium';
        this.done = false;

        
      },
      error: (err: any) => {
        console.error('5 - Fehler beim Erstellen der Task:', err);
      }
    });
  }
}
    

    
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TaskService } from '../../services/task.service';


@Component({
  selector: 'app-tasks',
  standalone:true,
  imports: [RouterLink, CommonModule],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks implements OnInit{
  tasks: any[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe({
      next: (response: any) => {
        console.log('Task geladen:', response);
        this.tasks = response.data;
      },
      error: (err: any) => {
        console.error('Fehler beim Laden der Tasks:', err);
      }

    })
  }
  
}

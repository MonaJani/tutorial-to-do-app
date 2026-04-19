import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tasks',
  standalone:true,
  imports: [RouterLink],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  tasks = [
    {
      name: 'Angular Seite bauen',
      date: '2026-04-11',
      priority: 'high',
      description: 'Die Task Seite fertigstellen'
    },
    {
      name: 'Drawn Together schauen',
      date: '2026-04-11',
      priority: 'high',
      description: 'Die Task Seite fertigstellen'
    },

  ]
}

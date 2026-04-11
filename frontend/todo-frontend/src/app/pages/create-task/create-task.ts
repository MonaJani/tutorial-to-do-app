import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-create-task',
  standalone:true,
  imports: [RouterLink],
  templateUrl: './create-task.html',
  styleUrl: './create-task.css',
})
export class CreateTask {}

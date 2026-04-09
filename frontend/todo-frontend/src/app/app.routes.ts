import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Register } from './pages/register/register';
import { Login } from './pages/login/login';
import { Tasks } from './pages/tasks/tasks';
import { CreateTask}  from './pages/create-task/create-task';
 

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'register', component: Register },
  { path: 'login', component: Login },
  { path: 'tasks', component: Tasks },
  { path: 'tasks/new', component: CreateTask } 
];

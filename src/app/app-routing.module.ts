import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodoActiveComponent } from './todo-active/todo-active.component';
import { TodoAllComponent } from './todo-all/todo-all.component';
import { TodoCompletedComponent } from './todo-completed/todo-completed.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard/todoall',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'todoall',
        component: TodoAllComponent,
      },
      {
        path: 'todoactive',
        component: TodoActiveComponent,
      },
      {
        path: 'todocompleted',
        component: TodoCompletedComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { Routes, RouterModule } from "@angular/router";

import { TaskListComponent } from './task/task-list.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo:"tasks", pathMatch: "full" },
    { path: 'tasks', component: TaskListComponent }
]; 

export const routing = RouterModule.forRoot(APP_ROUTES);
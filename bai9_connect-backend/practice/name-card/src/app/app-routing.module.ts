import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoComponent} from "./todo/todo.component";
import {UpdateComponent} from "./update/update.component";
import {DeleteDialogComponent} from "./delete-dialog/delete-dialog.component";


const routes: Routes = [{
  path: '',component: TodoComponent
},{
  path: 'todo-edit/:id',component: UpdateComponent
},{
  path: 'todo-delete/:id',component: DeleteDialogComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

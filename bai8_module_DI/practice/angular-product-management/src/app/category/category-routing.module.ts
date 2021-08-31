import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CategoryListComponent} from './category-list/category-list.component';
import {CategoryCreateComponent} from './category-create/category-create.component';
import {CategoryEditComponent} from './category-edit/category-edit.component';


const routes: Routes = [
  {path: '',
    pathMatch: 'full',
    redirectTo: 'category/list',
    component: CategoryListComponent
  },
  {path: 'category/list',
    component: CategoryListComponent
  },
  {path: 'category/create',
    component: CategoryCreateComponent
  },
  {path: 'category/edit/:id',
    component: CategoryEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }

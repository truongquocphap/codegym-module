import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RapChieuListComponent} from "./rap-chieu/rap-chieu-list/rap-chieu-list.component";
import {RapPhimCreateComponent} from "./rap-chieu/rap-phim-create/rap-phim-create.component";


const routes: Routes = [
  {path:'',component: RapChieuListComponent},
  {path:'rap-phim-create',component: RapPhimCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

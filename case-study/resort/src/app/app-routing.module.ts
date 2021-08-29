import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CustomerListComponent} from "./customer/customer-list/customer-list.component";
import {CustomerCreateComponent} from "./customer/customer-create/customer-create.component";
import {CustomerUpdateComponent} from "./customer/customer-update/customer-update.component";
import {EmployeeListComponent} from "./employee/employee-list/employee-list.component";
import {EmployeeCreateComponent} from "./employee/employee-create/employee-create.component";
import {EmployeeUpdateComponent} from "./employee/employee-update/employee-update.component";
import {ServiceListComponent} from "./service/service-list/service-list.component";
import {ServiceCreateComponent} from "./service/service-create/service-create.component";
import {ServiceUpdateComponent} from "./service/service-update/service-update.component";
import {ContractListComponent} from "./contract/contract-list/contract-list.component";
import {ContractCreateComponent} from "./contract/contract-create/contract-create.component";
import {ContractUpdateComponent} from "./contract/contract-update/contract-update.component";
import {HomeComponent} from "./layout/home/home.component";


const routes: Routes = [{
  path:'',component:HomeComponent
},{
  path: 'customer-list', component: CustomerListComponent
}, {
  path: 'customer-create', component: CustomerCreateComponent
}, {
  path: 'customer-edit/:id', component: CustomerUpdateComponent
},{
  path: 'employee-list',component:EmployeeListComponent
},{
  path: 'employee-create',component:EmployeeCreateComponent
},{
  path: 'employee-edit/:id',component:EmployeeUpdateComponent
},{
  path:'service-list',component:ServiceListComponent
},{
  path:'service-create',component:ServiceCreateComponent
},{
  path:'service-edit/:id',component:ServiceUpdateComponent
},{
  path: 'contract-list',component:ContractListComponent
},{
  path:'contract-create',component:ContractCreateComponent
},{
  path:'contract-edit/:id',component:ContractUpdateComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

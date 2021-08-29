import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { ContentComponent } from './layout/content/content.component';
import { HomeComponent } from './layout/home/home.component';

import { ContractListComponent } from './contract/contract-list/contract-list.component';
import { ContractCreateComponent } from './contract/contract-create/contract-create.component';
import { ContractUpdateComponent } from './contract/contract-update/contract-update.component';
import { ContractViewComponent } from './contract/contract-view/contract-view.component';
import { ContractDetailListComponent } from './contract-detail/contract-detail-list/contract-detail-list.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerUpdateComponent } from './customer/customer-update/customer-update.component';
import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import { CustomerViewComponent } from './customer/customer-view/customer-view.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeUpdateComponent } from './employee/employee-update/employee-update.component';
import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';
import { EmployeeViewComponent } from './employee/employee-view/employee-view.component';
import { ServiceListComponent } from './service/service-list/service-list.component';
import { ServiceCreateComponent } from './service/service-create/service-create.component';
import { ServiceUpdateComponent } from './service/service-update/service-update.component';
import { ServiceViewComponent } from './service/service-view/service-view.component';
import { CustomerTypeComponent } from './customer-type/customer-type.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { DeleteDialogComponent } from './customer/delete-dialog/delete-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ContentComponent,
    HomeComponent,
    ContractListComponent,
    ContractCreateComponent,
    ContractUpdateComponent,
    ContractViewComponent,
    ContractDetailListComponent,
    CustomerListComponent,
    CustomerUpdateComponent,
    CustomerCreateComponent,
    CustomerViewComponent,
    EmployeeListComponent,
    EmployeeUpdateComponent,
    EmployeeCreateComponent,
    EmployeeViewComponent,
    ServiceListComponent,
    ServiceCreateComponent,
    ServiceUpdateComponent,
    ServiceViewComponent,
    CustomerTypeComponent,
    DeleteDialogComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import {ICustomer} from "../../interface/icustomer";
import {ICustomerType} from "../../interface/icustomer-type";
import {CustomerService} from "../../angular-service/customer.service";
import {DeleteDialogComponent} from "../delete-dialog/delete-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customersList: ICustomer[]=[];

  constructor(private customerService: CustomerService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.customerService.getAll().subscribe(value => {
      this.customersList=value;
    })
  }
  openDialog(id: any): void {
    console.log(id);
    this.customerService.findById(id).subscribe(dataDialog => {
      const dialogRef = this.dialog.open(DeleteDialogComponent, {
        width: '500px',
        data: {name: dataDialog},
        disableClose: true
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.ngOnInit();
      });
    });
  }
}

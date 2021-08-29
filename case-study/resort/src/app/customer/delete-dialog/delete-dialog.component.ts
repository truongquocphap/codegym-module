import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CustomerService} from "../../angular-service/customer.service";


@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {
   customerCode: string;
  private id: number;
  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public customerService: CustomerService) {
  }

  ngOnInit(): void {
  this.customerCode=this.data.name.customerCode;
  this.id=this.data.name.id;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  delete() {
    this.customerService.deleteCustomer(this.id).subscribe(dataDialog => {
      this.dialogRef.close();
    });
  }

}

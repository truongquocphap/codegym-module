import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {ICustomerType} from "../../interface/icustomer-type";
import {CustomerService} from "../../angular-service/customer.service";
import {CustomerTypeService} from "../../angular-service/customer-type.service";
import {Router} from "@angular/router";
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  createCustomer: FormGroup;
  gender: number;
  customerType: ICustomerType[];


  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private router: Router,
              public snackBar: MatSnackBar) {
    this.createCustomer = new FormGroup({
      customerName: new FormControl('', Validators.required),
      birthday: new FormControl('', Validators.required),
      customerCode: new FormControl('', Validators.pattern('^\\KH-[0-9]{4}$')),
      gender: new FormControl('', Validators.required),
      idCard: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.pattern('^090[0-9]{7}$|\\(84\\)\\+90\\d{7}$|091\\d{7}$|\\(84\\)\\+91\\d{7}$'),
        Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      address: new FormControl('', Validators.required),
      customerType: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.getAllCustomerType();
  }

  get customerName() {
    return this.createCustomer.get('customerName');
  }

  addCustomer() {
    this.gender = Number(this.createCustomer.value.gender);
    this.createCustomer.value.gender = this.gender;
    const customer = this.createCustomer.value;
    this.customerService.saveCustomer(customer).subscribe(value => {
      this.router.navigateByUrl('customer-list');
      console.log(this.createCustomer.value.customerType);
      let config = new MatSnackBarConfig();
      config.duration = 2000;
      config.verticalPosition = "top";
      config.panelClass= ["color:blue;"];
      this.snackBar.open("Create new Customer success","OK", config);
    }, error => {
      console.log(error);
    })
  }

  getAllCustomerType() {
    this.customerTypeService.getAll().subscribe(value => {
      this.customerType = value;
    }, error => {
      console.log(error);
    })
  }

}

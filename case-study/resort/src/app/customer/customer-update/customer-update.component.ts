import {Component, OnInit} from '@angular/core';
import {CustomerTypeService} from "../../angular-service/customer-type.service";
import {CustomerService} from "../../angular-service/customer.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ICustomer} from "../../interface/icustomer";
import {ICustomerType} from "../../interface/icustomer-type";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {
  private customer: ICustomer;
   customerType: ICustomerType[];
  editCustomer: FormGroup;
  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
  constructor(private customerTypeService: CustomerTypeService,
             private customerService: CustomerService,
             private activatedRoute:ActivatedRoute,
             private router: Router) {
    this.editCustomer=new FormGroup({
      id: new FormControl(''),
      customerName : new FormControl('',Validators.required),
      birthday : new FormControl('',Validators.required),
      customerCode: new FormControl('',Validators.pattern('^\\KH-[0-9]{4}$')),
      gender: new FormControl('',Validators.required),
      idCard: new FormControl('',Validators.required),
      phone: new FormControl('',[Validators.pattern('^090[0-9]{7}$|\\(84\\)\\+90\\d{7}$|091\\d{7}$|\\(84\\)\\+91\\d{7}$'),
        Validators.required]),
      email: new FormControl('',[Validators.email,Validators.required]),
      address: new FormControl('',Validators.required),
      customerType: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.findById();
  }
  findById(){
    const customerId=Number(this.activatedRoute.snapshot.params.id);
    return this.customerService.findById(customerId).subscribe(value => {
      this.getAllCustomerType();
      this.customer=value;
      this.editCustomer.setValue(this.customer);
    });
  }
  getAllCustomerType(){
    this.customerTypeService.getAll().subscribe(value => {
      this.customerType=value;
    },error => {
      console.log(error);
    })
  }
  updateCustomer(){
    const  customer=this.editCustomer.value;
    const id = this.editCustomer.value.id;
    this.editCustomer.value.gender=Number(this.editCustomer.value.gender);
    this.customerService.updateCustomer(id,customer).subscribe(value => {

      this.router.navigateByUrl('customer-list');
    })
  }
}

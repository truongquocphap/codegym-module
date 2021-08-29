import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
createContract: FormGroup;
  constructor() {
    this.createContract=new FormGroup({
      contractId : new FormControl(),
      contractStartDate: new FormControl(),
      contractEndDate: new FormControl(),
      contractDeposit: new FormControl('',[Validators.required,Validators.min(1)]),
      contractTotalMoney: new FormControl('',[Validators.required,Validators.min(1)]),
      serviceId: new FormControl(),
      customerId: new FormControl(),
      employeeId: new FormControl()
    })
  }

  ngOnInit(): void {
  }

}

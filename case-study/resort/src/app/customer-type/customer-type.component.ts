import {Component, Input, OnInit} from '@angular/core';
import {ICustomerType} from "../interface/icustomer-type";

@Component({
  selector: 'app-customer-type',
  templateUrl: './customer-type.component.html',
  styleUrls: ['./customer-type.component.css']
})
export class CustomerTypeComponent implements OnInit {
  @Input()
  customerType: Array<ICustomerType> = [{
    id: 1, customerTypeName: 'Thường'
  },
    {
    id: 2, customerTypeName: 'Vip'
  },
    {
      id: 3, customerTypeName: 'Chuyên gia'
    }];

  constructor() {
  }

  ngOnInit(): void {
  }

}

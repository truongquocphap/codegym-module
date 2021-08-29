import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contract-update',
  templateUrl: './contract-update.component.html',
  styleUrls: ['./contract-update.component.css']
})
export class ContractUpdateComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  // updateContract = new FormGroup({
  //   contractId: new FormControl(),
  //   contractStartDate: new FormControl(),
  //   contractEndDate: new FormControl(),
  //   contractDeposit: new FormControl('', [Validators.required, Validators.min(1)]),
  //   contractTotalMoney: new FormControl('', [Validators.required, Validators.min(1)]),
  //   serviceId: new FormControl(),
  //   customerId: new FormControl(),
  //   employeeId: new FormControl()
  // });
  editContract() {
    // const product = this.editProduct.value;
    // const id=this.editProduct.value.id;
    //
    // this.productService.updateProduct(id, product);
    // alert('Cập nhật thành công');
    // this.router.navigateByUrl('/product/list')
  }
}

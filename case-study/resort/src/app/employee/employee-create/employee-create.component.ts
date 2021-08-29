import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
    createEmployee: FormGroup;
  constructor() {
    this.createEmployee=new FormGroup({
      employeeId : new FormControl(''),
      employeeName : new FormControl('',Validators.required),
      birthday : new FormControl(),
      employeeIdCart : new FormControl('',Validators.required),
      employeeSalary : new FormControl('',[Validators.min(1),Validators.required]),
      employeePhone : new FormControl('',[Validators.pattern('^090\\d{7}$|\\(84\\)\\+90\\d{7}$|091\\d{7}$|\\(84\\)\\+91\\d{7}$'),
        Validators.required]),
      employeeEmail : new FormControl('',[Validators.required,Validators.email]),
      employeeAddress : new FormControl('',Validators.required),
      positionId : new FormControl(),
      educationEmployeeId : new FormControl(),
      divisionEmployeeId : new FormControl()
    })

  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormGroupName, Validators} from "@angular/forms";

@Component({
  selector: 'app-service-create',
  templateUrl: './service-create.component.html',
  styleUrls: ['./service-create.component.css']
})
export class ServiceCreateComponent implements OnInit {
createService: FormGroup;
  constructor() {
    this.createService = new FormGroup({
      serviceId : new FormControl(),
      serviceName: new FormControl('',Validators.required),
      serviceArea: new FormControl('',[Validators.required,Validators.min(20)]),
      serviceCost: new FormControl('',[Validators.required,Validators.min(1)]),
      maxPeople: new FormControl('',[Validators.required,Validators.min(1)]),
      standardRoom: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required),
      poolArea: new FormControl('',[Validators.required,Validators.min(1)]),
      numberFloors: new FormControl('',[Validators.required,Validators.min(1)]),
      serviceCode: new FormControl('',[Validators.pattern('^\\DV[0-9]{4}$'),Validators.required]),
      serviceTypeId: new FormControl(),
      rentTypeId: new FormControl()
    })
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import {IDivision} from "../../interface/IDivision";
import {IPosition} from "../../interface/iposition";
import {IEducation} from "../../interface/IEducation";
import {IEmployee} from "../../interface/IEmployee";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employee: IEmployee[]= [];

  education: IEducation[] =[];
  division: IDivision[] =[];
  position: IPosition[]=[]
  constructor() {
  }

  ngOnInit(): void {
  }

}

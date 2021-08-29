import {IPosition} from "./iposition";
import {IEducation} from "./IEducation";
import {IDivision} from "./IDivision";

export interface IEmployee {
  id ?: number;
  employeeName ?: string;
  birthday ?: string;
  employeeIdCart ?: string;
  employeeSalary ?: number;
  employeePhone ?: string;
  employeeEmail ?: string;
  employeeAddress ?: string;
  position ?: IPosition;
  education ?: IEducation;
  division ?: IDivision;
}

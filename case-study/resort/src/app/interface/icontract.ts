import {IService} from "./iservice";
import {ICustomer} from "./icustomer";
import {IEmployee} from "./IEmployee";

export interface IContract {
  id?: number;
  contractStartDate?: string;
  contractEndDate?: string;
  contractDeposit?: number;
  contractTotalMoney?: number;
  service?: IService;
  customer?: ICustomer;
  employee?: IEmployee;
}

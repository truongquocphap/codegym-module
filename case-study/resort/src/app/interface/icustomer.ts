import {ICustomerType} from "./icustomer-type";

export interface ICustomer {
  id? : number;
  customerName? : string;
  birthday? : string;
  customerCode? : string;
  gender? : number;
  idCart? : string;
  phone? : string;
  email? : string;
  address? : string;
  customerType? : ICustomerType;
}

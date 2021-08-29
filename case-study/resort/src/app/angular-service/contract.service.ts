import { Injectable } from '@angular/core';
import {IContract} from "../interface/icontract";

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  contract: IContract[]=[];
  constructor() { }
  getAll(){
    return this.contract;
  }
  saveContract(contract){
    this.contract.push(contract);
  }

}

import {Component, OnInit} from '@angular/core';
import {IContract} from "../../interface/icontract";

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contract: IContract[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}

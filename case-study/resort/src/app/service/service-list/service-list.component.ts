import {Component, OnInit} from '@angular/core';
import {IService} from "../../interface/iservice";
import {IServiceType} from "../../interface/iservice-type";
import {IRentType} from "../../interface/IRentType";

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {
  service: IService[] = [];
  rentType: IRentType[] = [];
  serviceType: IServiceType[] = []

  constructor() {
  }

  ngOnInit(): void {
  }

}

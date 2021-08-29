import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {ICustomerType} from "../interface/icustomer-type";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
  private URL='http://localhost:3000/customerType';
  constructor(private http: HttpClient) { }
  getAll(): Observable<ICustomerType[]>{
    return this.http.get<ICustomerType[]>(this.URL);
  }
}

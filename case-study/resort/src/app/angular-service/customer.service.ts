import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICustomer} from "../interface/icustomer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private URL='http://localhost:3000/customer';
  constructor(private http: HttpClient) { }
  getAll(): Observable<ICustomer[]>{
    return this.http.get<ICustomer[]>(this.URL);
  }
  saveCustomer(customer){
    return this.http.post(this.URL,customer);
  }
  findById(id: number): Observable<ICustomer>{
    return this.http.get<ICustomer>(this.URL+'/'+id);
  }
  updateCustomer(id: number,customer: ICustomer): Observable<ICustomer>{
    return this.http.put(this.URL+'/'+id,customer);
  }
  deleteCustomer(id: number):Observable<ICustomer>{
    return this.http.delete(this.URL+'/'+id);
  }
}

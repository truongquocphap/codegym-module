import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IXuatChieu} from "../model/ixuat-chieu";

@Injectable({
  providedIn: 'root'
})
export class XuatChieuService {
private URL='http://localhost:3000/xuatChieu';
  constructor(private http: HttpClient) { }
  getAll(): Observable<IXuatChieu[]>{
    return this.http.get<IXuatChieu[]>(this.URL);
  }
}

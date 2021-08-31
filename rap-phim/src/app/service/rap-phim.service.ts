import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IRapPhim} from "../model/irap-phim";

@Injectable({
  providedIn: 'root'
})
export class RapPhimService {
  private URL='http://localhost:3000/rapChieuPhim';
  constructor(private http: HttpClient) { }
  getAll(): Observable<IRapPhim[]>{
    return this.http.get<IRapPhim[]>(this.URL);
  }
  delete(id: number): Observable<IRapPhim>{
    return this.http.delete<IRapPhim>(this.URL+'/'+id);
  }
  create(rapPhim): Observable<IRapPhim>{
    return this.http.post<IRapPhim>(this.URL,rapPhim);
  }
  findById(id: number): Observable<IRapPhim>{
    return this.http.get<IRapPhim>(this.URL+'/'+id);
  }
}

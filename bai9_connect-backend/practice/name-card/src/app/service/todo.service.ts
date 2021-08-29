import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Todo} from "../todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
    private URL='http://localhost:3000/todo';
  constructor(private  http: HttpClient) { }
  getALl(): Observable<Todo[]>{
    return this.http.get<Todo[]>( this.URL);
  }
  saveTodo(todo: Todo){
    return this.http.post<Todo>(this.URL,todo);
  }
  findById(id: number): Observable<Todo>{
    return this.http.get<Todo>(this.URL+'/'+id);
  }
  update(id: number,todo:Todo):Observable<Todo>{
    return this.http.put(this.URL+'/'+id,todo);
  }
  delete(id: number): Observable<Todo>{
    return this.http.delete(this.URL+'/'+id);
  }
}

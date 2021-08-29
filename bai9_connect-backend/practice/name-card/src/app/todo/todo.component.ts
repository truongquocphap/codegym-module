import { Component, OnInit } from '@angular/core';
import { Todo } from "../todo";
import {FormControl, FormGroup} from "@angular/forms";
import {TodoService} from "../service/todo.service";
import {ActivatedRoute} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {DeleteDialogComponent} from "../delete-dialog/delete-dialog.component";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  todoForm: FormGroup;
  constructor(private todoService: TodoService,
              private activatedRoute: ActivatedRoute,
              private dialog: MatDialog) {
    this.todoForm = new FormGroup({
      content: new FormControl(),
      complete: new FormControl(false),
    });
  }
  toggleTodo(i: number){
    this.todos[i].complete=!this.todos[i].complete;
  }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.todoService.getALl().subscribe(value => {
      this.todos=value;
    },error => {
      console.log('not fount');
    });
  }
  change(){
    this.todoService.saveTodo(this.todoForm.value).subscribe(() => {
      alert("create success(*__*)");
      this.todoForm.reset();
      this.getAll();
    });
  }
  openDialog(id: any): void {
    console.log(id);
    this.todoService.findById(id).subscribe(dataDialog => {
      const dialogRef = this.dialog.open(DeleteDialogComponent, {
        width: '500px',
        data: {name: dataDialog},
        disableClose: true
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.ngOnInit();
      });
    });
  }
}

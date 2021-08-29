import { Component, OnInit } from '@angular/core';
import {Todo} from "../todo";
import {FormControl, FormGroup} from "@angular/forms";
import {TodoService} from "../service/todo.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  todo: Todo;
  id: number;
  alert = false;
  editTodo: FormGroup=new FormGroup({
    id: new FormControl(),
    content: new FormControl(),
    complete: new FormControl(false)
  });
  constructor(private todoService: TodoService,
              private activated: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit(): void {
    this.finById();
  }
  finById(){
    const todoId=Number(this.activated.snapshot.params.id);
    this.id=todoId;
    return this.todoService.findById(todoId).subscribe(value => {
      this.todo=value;
      this.editTodo.setValue(this.todo);
    })
  }

  update(){
    const todo=this.editTodo.value;

    this.todoService.update(this.id,todo).subscribe(value => {
      this.alert=true;
      this.router.navigateByUrl('');
    },error => {
      console.log('error')
      console.log(error);
    });

  }

}

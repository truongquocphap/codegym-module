import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {TodoService} from "../service/todo.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Todo} from "../todo";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}

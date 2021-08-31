import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../../service/category/category.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {

  createForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl()
  });
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
  }
  submit() {
    const category = this.createForm.value;
    this.categoryService.saveCategory(category);
    this.createForm.reset();
  }
}

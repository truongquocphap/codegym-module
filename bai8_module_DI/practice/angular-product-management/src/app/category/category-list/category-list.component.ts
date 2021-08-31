import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../service/category/category.service';
import {Category} from '../../model/category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  keyWord: string;
  categorys: Category[] = [];
  p: number;
  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.categorys = this.categoryService.getAll();
  }

}

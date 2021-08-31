import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product/product.service';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category/category.service';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productObj: Product;
  categorys: Category[] = [];
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl()
  });


  constructor(private productService: ProductService,
              private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory() {
    this.categorys = this.categoryService.getAll();
  }

  submit() {
    this.productObj = this.productForm.value;
    const category = this.categoryService.findById(this.productForm.value.category);
    this.productObj.category = category;
    this.productService.saveProduct(this.productObj);
    this.productForm.reset();
  }

}

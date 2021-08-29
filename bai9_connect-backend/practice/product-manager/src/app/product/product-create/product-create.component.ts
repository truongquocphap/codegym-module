import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {CategoryService} from "../../service/category.service";
import {Category} from "../../model/category";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  category: Category[]=[];
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl()
  });
  constructor(private productService: ProductService,
              private router: Router,
              private categoryService: CategoryService) {

  }

  ngOnInit(): void {
    this.getAllCategory();
  }
  submit() {
    const product = this.productForm.value;
    this.productService.saveProduct(product).subscribe(() => {
      alert("thêm thành công")
      this.productForm.reset();
      this.router.navigateByUrl('product/list');
    });
  }
  getAllCategory(){
    this.categoryService.getAll().subscribe(value => {
      this.category=value;
    },error => {
      console.log(error);
    });
  }
}

import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../model/product";
import {FormControl, FormGroup} from "@angular/forms";
import {Category} from "../../model/category";
import {CategoryService} from "../../service/category.service";


@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  category: Category[] = [];
  product: Product;
  editProduct = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
    category: new FormControl('')
  })

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private categoryService: CategoryService) {
  }

  findById() {
    const productId = Number(this.activatedRoute.snapshot.params.id);
    return this.productService.findById(productId).subscribe(value => {
      this.getAllCategory();
      this.product = value;
      this.editProduct.setValue(this.product);


    });
  }

  ngOnInit(): void {

    this.findById();
  }

  updateProduct() {
    const product = this.editProduct.value;
    const id = this.editProduct.value.id;
    console.log(this.editProduct.value);
    this.productService.updateProduct(id, product).subscribe(value => {
      alert('Cập nhật thành công');
      this.router.navigateByUrl('/product/list');
    }, error => {
      console.log(error);
    });
  }

  getAllCategory() {
    this.categoryService.getAll().subscribe(value => {
      this.category = value;
    }, error => {
      console.log(error);
    });
  }
}

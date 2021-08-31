import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product;
  deleteProduct = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl('')
  })

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  findById() {
    const productId = Number(this.activatedRoute.snapshot.params.id);
    this.product = this.productService.findById(productId);
    this.deleteProduct.setValue(this.product);
  }

  ngOnInit(): void {
    this.findById();
  }

  delete() {
    const id = Number(this.deleteProduct.value.id);
    this.productService.deleteProduct(id);
    alert('Xoá thành công');
    this.router.navigate(['/product/list']);
  }

}

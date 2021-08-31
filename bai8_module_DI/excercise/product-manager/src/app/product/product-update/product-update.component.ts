import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../model/product";
import {FormControl, FormGroup} from "@angular/forms";



@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product;
  editProduct = new FormGroup({
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
    this.editProduct.setValue(this.product);
  }

  ngOnInit(): void {
    this.findById();
  }
  updateProduct() {
    const product = this.editProduct.value;
    const id=this.editProduct.value.id;

    this.productService.updateProduct(id, product);
    alert('Cập nhật thành công');
    this.router.navigateByUrl('/product/list')
  }
}

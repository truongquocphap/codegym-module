import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product/product.service';
import {CategoryService} from '../../service/category/category.service';
import {Category} from '../../model/category';
import {LoadCssService} from '../../file-css/load-css.service (1)';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  keyWord: string;
  products: Product[] = [];
  p: number;
  idDelete: number;

  constructor(private productService: ProductService, private loadFile: LoadCssService) {
    loadFile.loadCss('https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css');
    loadFile.loadScript('https://code.jquery.com/jquery-3.5.1.slim.min.js');
    loadFile.loadScript('https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js');
    loadFile.loadScript('https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js');
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.products = this.productService.getAll();
  }

  changeId(id: any) {
    this.idDelete = id;
  }

  deleteModal() {
    this.productService.deleteProduct(this.idDelete);
    // alert('xóa thành công');
  }
}

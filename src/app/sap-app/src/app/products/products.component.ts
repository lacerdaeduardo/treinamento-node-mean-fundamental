import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productService : ProductService) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts(){
    this.productService.getProducts().subscribe(products => this.products = products);
  }
  deleteProduct(product : Product){
    this.productService.deleteProduct(product)
      .subscribe(p => {
        var index = this.products.indexOf(product);
        if(index != -1) {
          this.products.splice(index, 1);
        }
      });
  }
  products: Product[];
}

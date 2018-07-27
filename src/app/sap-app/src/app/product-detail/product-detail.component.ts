import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  action: string;
  constructor(
    private productService:ProductService,
    private location:Location,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.start();
  }
  
  start() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id){
      this.action = 'U';
      this.getProduct(id);
    }else{
      this.action = 'C';
      this.product = new Product();
    }
  }
  getProduct(id: string) {
    this.productService.getProduct(id).subscribe(product => this.product = product);
  }

  save(){    
    if (this.action == 'C'){
      this.productService.addProduct(this.product).subscribe(p => 
        this.router.navigate(['products'])
      );
    }else{
      this.productService.updateProduct(this.product).subscribe(p => 
        this.router.navigate(['products'])
      );
    }

  }

  @Input() product: Product;

}

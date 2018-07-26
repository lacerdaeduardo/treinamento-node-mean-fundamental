import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable, of } from '../../node_modules/rxjs';
import { ProductsComponent } from './products/products.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getProducts(): Observable<Product[]> {
    
    let array : Product[] = [
      {id: "1", brand: "brand1", price: 10.00, description: "description1" },
      {id: "2", brand: "brand2", price: 11.00, description: "description2" },
      {id: "3", brand: "brand3", price: 12.00, description: "description3" },
      {id: "4", brand: "brand4", price: 13.00, description: "description4" },
      {id: "5", brand: "brand5", price: 14.00, description: "description5" },
      {id: "6", brand: "brand6", price: 15.00, description: "description6" },
      {id: "7", brand: "brand7", price: 16.00, description: "description7" },
      {id: "8", brand: "brand8", price: 17.00, description: "description8" },
      {id: "9", brand: "brand9", price: 18.00, description: "description9" }
    ];
  
    return of(array);
  }
}

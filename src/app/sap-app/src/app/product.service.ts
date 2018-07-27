import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable, of } from '../../node_modules/rxjs';
import { ProductsComponent } from './products/products.component';
import { API_URL } from './config';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getProducts(): Observable<Product[]> {
    var url = `${API_URL}/products`;
    return this.http.get<Product[]>(url);      
  }
  getProduct(id:string): Observable<Product> {
    var url = `${API_URL}/products/${id}`;
    return this.http.get<Product>(url);      
  }
}

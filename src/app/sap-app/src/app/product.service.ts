import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable, of } from '../../node_modules/rxjs';
import { API_URL } from './config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = `${API_URL}/products`;
  constructor(private http:HttpClient) { }
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);      
  }
  getProduct(id:string): Observable<Product> {
    return this.http.get<Product>(`${this.url}/${id}`);      
  }
  addProduct(product:Product): Observable<Product>{    
    return this.http.post<Product>(this.url, product, httpOptions).pipe(
      tap((p: Product) => console.log(`added id=${p._id}`)),
      catchError(this.handleError<Product>('addProduct')));
  }
  updateProduct(product:Product): Observable<Product>{
    return this.http.put<Product>(`${this.url}/${product._id}`, product, httpOptions).pipe(
      tap((p: Product) => console.log(`updated id=${p._id}`)),
      catchError(this.handleError<Product>('addProduct')));
  }
  deleteProduct(product:Product): Observable<Product>{
    return this.http.delete<Product>(`${this.url}/${product._id}`).pipe(
      tap((p: Product) => console.log(`added id=${p._id}`)),
      catchError(this.handleError<Product>('addProduct')));
  }
  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

}

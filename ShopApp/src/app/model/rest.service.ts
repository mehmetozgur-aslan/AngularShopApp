import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';
import { Category } from './category.model';
import { Order } from './order.model';
import { map } from 'rxjs/operators';

@Injectable()
export class RestService {
  baseUrl: string = 'http://localhost:3500/';
  token: string;
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseUrl + 'products');
  }
  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.baseUrl + 'categories');
  }

  saveOrder(order: Order): Observable<Order> {
    return this.httpClient.post<Order>(this.baseUrl + 'orders', order);
  }

  authentication(username: string, password: string): Observable<boolean> {
    return this.httpClient
      .post<any>(this.baseUrl + 'login', {
        username: username,
        password: password,
      })
      .pipe(
        map((response) => {
          this.token = response.success ? response.token : null;
          return response.success;
        })
      );
  }

  addCategory(category: Category): Observable<Category> {
    return this.httpClient.post<Category>(this.baseUrl + "categories", category, {
      headers: new HttpHeaders({
        "Authorization": `Bearer<${this.token}>`
      })
    })
  }

  addProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.baseUrl + 'products', product, {
      headers: new HttpHeaders({
        Authorization: `Bearer<${this.token}>`,
      }),
    });
  }

  updateProduct(product: Product): Observable<Product> {
    return this.httpClient.put<Product>(
      this.baseUrl + 'products/' + product.id,
      product,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer<${this.token}>`,
        }),
      }
    );
  }

  updateCategory(category: Category): Observable<Category> {
    return this.httpClient.put<Category>(this.baseUrl + "categories/" + category.id, category, {
      headers: new HttpHeaders({
        "Authorization": `Bearer<${this.token}>`
      })
    })
  }


  deleteProduct(product: Product): Observable<Product> {
    return this.httpClient.delete<Product>(
      this.baseUrl + 'products/' + product.id,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer<${this.token}>`,
        }),
      }
    );
  }

  deleteCategory(category: Category): Observable<Category> {
    return this.httpClient.delete<Category>(this.baseUrl + "categories/" + category.id, {
      headers: new HttpHeaders({
        "Authorization": `Bearer<${this.token}>`
      })
    })
  }



}

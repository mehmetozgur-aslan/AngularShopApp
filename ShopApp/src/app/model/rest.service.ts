import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';
import { Category } from './category.model';
import { Order } from './order.model';
import {map} from 'rxjs/operators';

@Injectable()
export class RestService {
  baseUrl: string = 'http://localhost:3500/';
  token:string;
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
    return this.httpClient.post<any>(this.baseUrl + 'login', {
      username: username,
      password: password,
    }).pipe(map(response=>{
this.token=response.success?response.token:null;
return response.success;
    }));
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Options } from '../interfaces/types';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  // Used to make a GET request to the API
  get<T>(url: string, options: Options): Observable<T> {
    return this.httpClient.get<T>(url, options) as Observable<T>;
  }

  // Used to make a POST request to the API
  post<T>(url: string, body: Product, options: Options): Observable<T> {
    return this.httpClient.post<T>(url, body, options) as Observable<T>;
  }

  // Used to make a PUT request to the API
  patch<T>(url: string, body: Product, options: Options): Observable<T> {
    return this.httpClient.patch<T>(url, body, options) as Observable<T>;
  }

  // Used to make a DELETE request to the API
  delete<T>(url: string ,options: Options): Observable<T> {
    return this.httpClient.delete<T>(url,options) as Observable<T>;
  }
}

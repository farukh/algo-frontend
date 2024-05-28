

import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { ApiResponse } from '../interfaces/api-response';
import { Product } from '../interfaces/product';


@Injectable({
  providedIn: 'root',
})
export class InventorymgtService {
   baseUrl = 'https://localhost:7270';

  //baseUrl = 'https://abdullahfarukh.bsite.net';

  constructor(private apiService: ApiService) {}

  // Getting products/stock from the API
  getData = (
    url: string,
  ): Observable<ApiResponse> => {
    return this.apiService.get(this.baseUrl+url, {
      responseType: 'json',
    });
  };

  // Adding a product/stockPurchase etc. via the API
  addData = (url: string, body: any): Observable<any> => {
    debugger;
    console.log(this.baseUrl+url,body);
    return this.apiService.post(this.baseUrl+url, body, {});
  };

  // Editing a product/stockPurchase via the API
  editProduct = (url: string, body: any): Observable<any> => {
    return this.apiService.patch(this.baseUrl+url, body, {});
  };

  // Deleting a product via the API
  deleteProduct = (url: string): Observable<any> => {
    debugger;
    console.log(this.baseUrl+url);
    return this.apiService.delete(this.baseUrl+url,{});
  };


  /////////////////////////////////
  // Stock
  /////////////////////////////////
   // Getting Stock from the API
  //  getStock = (
  //   url: string,
  // ): Observable<ApiResponse> => {
  //   return this.apiService.get(url, {
  //     responseType: 'json',
  //   });
  // };
}

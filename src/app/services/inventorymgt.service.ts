

import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { ApiResponse } from '../interfaces/api-response';


@Injectable({
  providedIn: 'root',
})
export class InventorymgtService {
  constructor(private apiService: ApiService) {}

  // Getting products from the API
  getProducts = (
    url: string,
  ): Observable<ApiResponse> => {
    return this.apiService.get(url, {
      responseType: 'json',
    });
  };

  // Adding a product via the API
  addProduct = (url: string, body: any): Observable<any> => {
    return this.apiService.post(url, body, {});
  };

  // Editing a product via the API
  editProduct = (url: string, body: any): Observable<any> => {
    return this.apiService.patch(url, body, {});
  };

  // Deleting a product via the API
  deleteProduct = (url: string): Observable<any> => {
    return this.apiService.delete(url, {});
  };
}

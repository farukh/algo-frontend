import { Component } from '@angular/core';
import { ProductsComponent } from '../components/products/products.component';
import { CommonModule } from '@angular/common';
import { Product } from '../interfaces/product';
import { InventorymgtService } from '../services/inventorymgt.service';
import { ApiResponse } from '../interfaces/api-response';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductsComponent, CommonModule,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  products: Product[] = [];
  constructor(private inventorymgtService: InventorymgtService) {}


  ngOnInit() {
    this.fetchProducts();
  }
  fetchProducts() {
    this.inventorymgtService
      .getProducts('https://localhost:7270/api/StockInventory/GetAllProducts')
      .subscribe({
        next: (data: ApiResponse) => {
          this.products = data.data as Product[];
         },
        error: (error) => {
          console.log(error);
        },
      });
  }

}

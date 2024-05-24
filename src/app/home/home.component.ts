import { Component } from '@angular/core';
import { ProductsComponent } from '../components/products/products.component';
import { CommonModule } from '@angular/common';
import { Product } from '../interfaces/product';
import { InventorymgtService } from '../services/inventorymgt.service';
import { ApiResponse } from '../interfaces/api-response';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductsComponent, CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  products: Product[] = [];
  constructor(private inventorymgtService: InventorymgtService,private toastr: ToastrService) {}

  selectedProduct: Product ={
    productId: 0,
    productName: "",
    price: "",
    createdDate: new Date("2024/05/01"),
    productDetails: ''
 }

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



  deleteProductdHandler(product: Product){

    this.selectedProduct = product;
debugger;
    // Delete the product
    this.inventorymgtService
    .deleteProduct(`https://localhost:7270/api/StockInventory/DeleteProduct?id=${this.selectedProduct.productId}`)
    .subscribe({
      next: (data: ApiResponse) => {
        console.log(data.result,data.message);
        if(data.result){
          console.log(data.result,data.message);
          this.toastr.success('Deleted', 'Product Deleted Successfully');

         // if successfully deleted then refresh/fetch products again
        this.fetchProducts();
        }
        else{
          this.toastr.error(data.message,'Deletion Stopped...');

          console.log(data.result,data.message);
        }
        },
      error: (error) => {
        console.log(error);
      },
    });

  }


}

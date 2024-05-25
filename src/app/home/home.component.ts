import { Component } from '@angular/core';
import { ProductsComponent } from '../components/products/products.component';
import { CommonModule } from '@angular/common';
import { Product } from '../interfaces/product';
import { InventorymgtService } from '../services/inventorymgt.service';
import { ApiResponse } from '../interfaces/api-response';
import { ToastrService } from 'ngx-toastr';
import { EditProductComponent } from '../components/edit-product/edit-product.component';
import { NavigationExtras, Router } from '@angular/router';



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
  constructor(private inventorymgtService: InventorymgtService,private toastr: ToastrService,private router:Router) {}

  selectedProduct: Product ={
    productId: 0,
    productName: "",
    price: 0,
    createdDate: new Date(),
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
  editProductdHandler(product: Product){


// const myObject = product;

const navigationExtras: NavigationExtras = {
  state: {
    data: product
  }
};
console.log(navigationExtras,'editProductdHandler');
this.router.navigate(['/edit-product'], navigationExtras);

// this.selectedProduct = product;
//      // Edit the product
//     this.inventorymgtService
//     .editProduct(`https://localhost:7270/api/StockInventory/EditProduct`,this.selectedProduct)
//     .subscribe({
//       next: (data: ApiResponse) => {
//         console.log(data.result,data.message);
//         if(data.result){
//           console.log(data.result,data.message);
//           this.toastr.success('Edited', 'Product Edited Successfully');

//          // if successfully deleted then refresh/fetch products again
//         this.fetchProducts();
//         }
//         else{
//           this.toastr.error(data.message,'Deletion Stopped...');

//           console.log(data.result,data.message);
//         }
//         },
//       error: (error) => {
//         console.log(error);
//       },
//     });

  }

}

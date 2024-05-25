import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../../interfaces/product';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiResponse } from '../../interfaces/api-response';
import { InventorymgtService } from '../../services/inventorymgt.service';
import { ToastrService } from 'ngx-toastr';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {

  constructor(private inventorymgtService: InventorymgtService,private toastr: ToastrService, private router:Router) {}

  product: Product
  =
  {
    productId: 0,
    productName: "",
    price: 0,
    createdDate: new Date(),
    productDetails: ''
 }



 addProduct()
 {
  if (!this.product.productName  || !this.product.price  || !this.product.productDetails){
    this.toastr.error('Please fill all the fields','Add Product Failed...');
    return;
  }
      // Add the product
   this.inventorymgtService
  .addData(`https://localhost:7270/api/StockInventory/CreateNewProduct`,this.product ).subscribe({
   next: (data: ApiResponse) => {
     console.log(data.result,data.message);
     if(data.result){
       console.log(data.result,data.message);
       this.toastr.success('Product Added Successfully, Navigating to Home Page','Added...' );

      this.product.productName = '';
      this.product.productDetails = '';
      this.product.price = 0;
      this.router.navigate([''])
     }
     else{
       this.toastr.error(data.message,'Add Product Failed...');

       console.log(data.result,data.message);
     }
     },
   error: (error) => {
     console.log(error);
   },
 });

 }
}

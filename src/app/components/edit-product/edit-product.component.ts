import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../interfaces/product';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { InventorymgtService } from '../../services/inventorymgt.service';
import { ApiResponse } from '../../interfaces/api-response';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.scss'
})
export class EditProductComponent {

  product: Product =
  {
    productId: 0,
    productName: "",
    price: 0,
    createdDate: new Date(),
    productDetails: ''
 }
ngOnInit() {
  const currentState = this.router.lastSuccessfulNavigation;
  console.log(currentState?.extras?.state?.['data'],'ngOnInit')
  this.product = currentState?.extras?.state?.['data'];
  console.log(this.product,'ngOnInit2')

}
editProduct()
{
  if (!this.product.productName  || !this.product.price  || !this.product.productDetails){
    this.toastr.error('Please fill all the fields','Add Product Failed...');
    return;
  }
      // Add the product
   this.inventorymgtService
  .editProduct(`/api/StockInventory/EditProduct`,this.product ).subscribe({
   next: (data: ApiResponse) => {
     console.log(data.result,data.message);
     if(data.result){
       console.log(data.result,data.message);
       this.toastr.success('Product Edited Successfully, Navigating to Home Page','Added...' );

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

constructor(private router: Router, private toastr: ToastrService, private inventorymgtService: InventorymgtService)
{
  //console.log(this.product);

}
}



import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../interfaces/product';
import { StockPurchase } from '../../interfaces/stock-purchase';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiResponse } from '../../interfaces/api-response';
import { InventorymgtService } from '../../services/inventorymgt.service';
import { StockSale } from '../../interfaces/stock-sale';

@Component({
  selector: 'app-stock-sale',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './stock-sale.component.html',
  styleUrl: './stock-sale.component.scss'
})
export class StockSaleComponent {
constructor(private router: Router,private toastr : ToastrService,private inventorymgtService: InventorymgtService) {
}
  stockSale : StockSale =
  {
   saleId: 0,
   invoiceNo: "",
   customerName: "",
   mobileNo:"",
   saleDate: new Date(),
  productId: 0,
  productName:"",
  quantity: 0,
  totalAmount:0,
  }
  selectedProduct: Product =
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
    this.selectedProduct = currentState?.extras?.state?.['data'];
    this.stockSale.productId = this.selectedProduct.productId!;

   // console.log(this.product,'ngOnInit2')

  }

  stockSaleNow()
  {
    if(this.stockSale.quantity<1)
      {
        this.toastr.error('Quantity must be greater then 0','Add Purchase Failed...');
        return;
      }
    if (!this.stockSale.customerName  || !this.stockSale.invoiceNo  || !this.stockSale.totalAmount || !this.stockSale.customerName)
      {
      this.toastr.error('Please fill all the fields','Add Sale Failed...');
      return;
    }
        // add Product info in Stock Purchase Information
        // Add the Stock Purchase
     this.inventorymgtService
    .addData(`https://localhost:7270/api/StockInventory/CreateNewSale`,this.stockSale ).subscribe({
     next: (data: ApiResponse) => {
       console.log(data.result,data.message);
       if(data.result){
         console.log(data.result,data.message);
         this.toastr.success('Stock Sale Saved Successfully, Navigating to Stock Sale Page','Added...' );
        this.router.navigate(['/stock-sale-list'])
       }
       else{
         this.toastr.error(data.message,'Stock Sale Addition Failed...');

         console.log(data.result,data.message);
       }
       },
     error: (error) => {
       console.log(error);
     },
   });

  }
}

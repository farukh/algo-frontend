import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../interfaces/product';
import { StockPurchase } from '../../interfaces/stock-purchase';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiResponse } from '../../interfaces/api-response';
import { InventorymgtService } from '../../services/inventorymgt.service';

@Component({
  selector: 'app-stock-purchase',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './stock-purchase.component.html',
  styleUrl: './stock-purchase.component.scss'
})
export class StockPurchaseComponent {
 // @Input() product!: Product;
 // @Output() stockPurcaseEvent: EventEmitter<StockPurchases> = new EventEmitter;
constructor(private router: Router,private toastr : ToastrService,private inventorymgtService: InventorymgtService) {
}
  stockPurchase : StockPurchase =
  {
   purchaseId :0,
   purchaseDate: new Date(),
   productId : 0,
   quantity : 0,
   supplierName : "",
   invoiceAmount: 0,
   invoiceNo : "",
   productName:""
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
    this.stockPurchase.productId = this.selectedProduct.productId!;

   // console.log(this.product,'ngOnInit2')

  }

  stockPurchaseNow()
  {
    if(this.stockPurchase.quantity<1)
      {
        this.toastr.error('Quantity must be greater then 0','Add Purchase Failed...');
        return;
      }
    if (!this.stockPurchase.supplierName  || !this.stockPurchase.invoiceNo  || !this.stockPurchase.invoiceAmount)
      {
      this.toastr.error('Please fill all the fields','Add Purchase Failed...');
      return;
    }
        // add Product info in Stock Purchase Information
        // Add the Stock Purchase
     this.inventorymgtService
    .addData(`https://localhost:7270/api/StockInventory/CreateNewPurchase`,this.stockPurchase ).subscribe({
     next: (data: ApiResponse) => {
       console.log(data.result,data.message);
       if(data.result){
         console.log(data.result,data.message);
         this.toastr.success('Stock Purchase Saved Successfully, Navigating to Stock Page','Added...' );
        this.router.navigate(['/stock-list'])
       }
       else{
         this.toastr.error(data.message,'Stock Purchase Addition Failed...');

         console.log(data.result,data.message);
       }
       },
     error: (error) => {
       console.log(error);
     },
   });

  }
}

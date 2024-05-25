import { Component } from '@angular/core';
import { InventorymgtService } from '../../services/inventorymgt.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { StockPurchase } from '../../interfaces/stock-purchase';
import { ApiResponse } from '../../interfaces/api-response';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stock-purchase-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stock-purchase-list.component.html',
  styleUrl: './stock-purchase-list.component.scss'
})
export class StockPurchaseListComponent {
  stockPurchases: StockPurchase[] = [];

  constructor(private inventorymgtService: InventorymgtService,private toastr: ToastrService,private router:Router) {}


  ngOnInit() {
    this.fetchStocks();
  }
  fetchStocks() {
    this.inventorymgtService
      .getData('https://localhost:7270/api/StockInventory/GetAllPurchase')
      .subscribe({
        next: (data: ApiResponse) => {
          this.stockPurchases = data.data as StockPurchase[];
         },
        error: (error) => {
          console.log(error);
        },
      });
  }
}


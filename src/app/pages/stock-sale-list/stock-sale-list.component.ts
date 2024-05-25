import { Component } from '@angular/core';
import { StockSale } from '../../interfaces/stock-sale';
import { InventorymgtService } from '../../services/inventorymgt.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ApiResponse } from '../../interfaces/api-response';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stock-sale-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stock-sale-list.component.html',
  styleUrl: './stock-sale-list.component.scss'
})
export class StockSaleListComponent {
  stockSales: StockSale[] = [];

  constructor(private inventorymgtService: InventorymgtService,private toastr: ToastrService,private router:Router) {}


  ngOnInit() {
    this.fetchStocks();
  }
  fetchStocks() {
    this.inventorymgtService
      .getData('https://localhost:7270/api/StockInventory/GetAllSale')
      .subscribe({
        next: (data: ApiResponse) => {
          this.stockSales = data.data as StockSale[];
         },
        error: (error) => {
          console.log(error);
        },
      });
  }
}




import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Stock } from '../../interfaces/stock';
import { InventorymgtService } from '../../services/inventorymgt.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ApiResponse } from '../../interfaces/api-response';
import { StockComponent } from '../../components/stock/stock.component';


@Component({
  selector: 'app-stock-list',
  standalone: true,
  imports: [CommonModule,StockComponent],
  templateUrl: './stock-list.component.html',
  styleUrl: './stock-list.component.scss'
})
export class StockListComponent {
  stocks: Stock[] = [];

  constructor(private inventorymgtService: InventorymgtService,private toastr: ToastrService,private router:Router) {}


  ngOnInit() {
    this.fetchStocks();
  }
  fetchStocks() {
    this.inventorymgtService
      .getData('https://localhost:7270/api/StockInventory/GetAllStock')
      .subscribe({
        next: (data: ApiResponse) => {
          this.stocks = data.data as Stock[];
         },
        error: (error) => {
          console.log(error);
        },
      });
  }
}

import { Component, Input } from '@angular/core';
import { Stock } from '../../interfaces/stock';


@Component({
  selector: 'app-stock',
  standalone: true,
  imports: [
  ],
  templateUrl: './stock.component.html',
  styleUrl: './stock.component.scss'
})
export class StockComponent {
  @Input() stock!: Stock;


  // stockPurchase()
  // {
  //   console.log(this.stock);
  // }

  // stockSale()
  // {
  //   console.log(this.stock);
  // }

}

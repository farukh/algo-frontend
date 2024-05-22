

import {
  Component,
  EventEmitter,
  Input,
  Output,
 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../interfaces/product';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule
  ],
  providers: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {


  @Input() product!: Product;


  ngOnInit() {}
}

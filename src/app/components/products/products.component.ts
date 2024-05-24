

import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../interfaces/product';
import { TruncateDescriptionPipe } from "../../pipes/truncate-description.pipe";
import { ConfirmationService } from 'primeng/api';
 import { ConfirmPopupModule } from 'primeng/confirmpopup';


@Component({
    selector: 'app-products',
    standalone: true,
    providers: [ConfirmationService],
    templateUrl: './products.component.html',
    styleUrl: './products.component.scss',
    imports: [FormsModule, TruncateDescriptionPipe,ConfirmPopupModule]
})
export class ProductsComponent {

 @ViewChild('deleteButton') deleteButton: any;
 @Input() product!: Product;
 @Output() deleteProductEvent: EventEmitter<Product> = new EventEmitter;
constructor(private confirmationService: ConfirmationService)
{}
  ngOnInit() {}

confirmDelete(){

this.confirmationService.confirm(
  {
  target:this.deleteButton.nativeElement,
  message:"Are you sure that you want to delete this product?",
  accept:()=>{
    this.onDelete(); },
  });
}

  onDelete()
  {
    console.log(this.product);
    this.deleteProductEvent.emit(this.product);
  }
}

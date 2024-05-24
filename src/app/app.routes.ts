import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StockComponent } from './components/stock/stock.component';
import { StockPurchaseComponent } from './components/stock-purchase/stock-purchase.component';
import { StockSaleComponent } from './components/stock-sale/stock-sale.component';
import { AddProductComponent } from './components/add-product/add-product.component';

// Your routing file should look like this
export const routes: Routes = [
  // A route to the home page (component)
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'stock',
    component: StockComponent,
  },

  {
    path: 'stock-purchase',
    component: StockPurchaseComponent,
  },

  {
    path: 'stock-sale',
    component: StockSaleComponent,
  },

  {
    path: 'add-product',
    component: AddProductComponent,
  },




];

import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StockComponent } from './components/stock/stock.component';
import { StockPurchaseComponent } from './components/stock-purchase/stock-purchase.component';
import { StockSaleComponent } from './components/stock-sale/stock-sale.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { StockListComponent } from './pages/stock-list/stock-list.component';
import { StockPurchaseListComponent } from './pages/stock-purchase-list/stock-purchase-list.component';
import { StockSaleListComponent } from './pages/stock-sale-list/stock-sale-list.component';

// Your routing file should look like this
export const routes: Routes = [
  // A route to the home page (component)
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'stock-list',
    component: StockListComponent,
  },

  {
    path: 'stock-purchase',
    component: StockPurchaseComponent,
  },
  {
    path: 'stock-purchase-list',
    component: StockPurchaseListComponent,
  },

  {
    path: 'stock-sale',
    component: StockSaleComponent,
  },
  {
    path: 'stock-sale-list',
    component: StockSaleListComponent,
  },

  {
    path: 'add-product',
    component: AddProductComponent,
  },
  {
    path: 'edit-product',
    component: EditProductComponent,
  },




];

import { CurrenceyPipe } from './../lib/currencey.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
  declarations: [ProductListComponent, ProductCardComponent, CurrenceyPipe],
  imports: [CommonModule, ProductRoutingModule],
})
export class ProductModule {}

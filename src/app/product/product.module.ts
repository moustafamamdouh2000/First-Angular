import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ListComponent } from './list/list.component';
import { CardComponent } from './card/card.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    ListComponent,
    CardComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }

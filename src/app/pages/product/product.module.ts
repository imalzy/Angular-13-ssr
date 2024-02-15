import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './product.component';
import { ProductRoutingModule } from './product-routing.module';
import { CProductModule } from 'src/app/shared/components/c-product/product.module';


@NgModule({
  declarations: [
    ProductComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    CProductModule
  ]
})
export class ProductModule { }

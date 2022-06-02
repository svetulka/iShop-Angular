import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop/shop.component';
import { ProductComponent } from './product/product.component';



@NgModule({
  declarations: [
    ProductComponent,
    ShopComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ShopComponent
  ]
})
export class IshopModule { }

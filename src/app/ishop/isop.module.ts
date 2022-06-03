import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop/shop.component';
import { ProductComponent } from './product/product.component';
import { ProductCardComponent } from './product-card/product-card.component';


@NgModule({
  declarations: [
    ProductComponent,
    ShopComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ShopComponent
  ]
})
export class IshopModule { }

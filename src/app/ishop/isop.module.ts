import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop/shop.component';
import { ProductComponent } from './product/product.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { FormsModule } from '@angular/forms';
import { ProductsService } from './ishop.service';


@NgModule({
  declarations: [
    ProductComponent,
    ShopComponent,
    ProductCardComponent, 
    ProductCreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ShopComponent
  ],
  providers: [ProductsService]
})
export class IshopModule { }

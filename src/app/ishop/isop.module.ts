import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop/shop.component';
import { ProductComponent } from './product/product.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsService } from './ishop.service';
import { ProductEditComponent } from './product-edit/product-edit.component';


@NgModule({
  declarations: [
    ProductComponent,
    ShopComponent,
    ProductCardComponent, 
    ProductCreateComponent,
    ProductEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ShopComponent
  ],
  providers: [ProductsService]
})
export class IshopModule { }

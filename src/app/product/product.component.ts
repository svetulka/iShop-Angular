import { Component, Input } from '@angular/core';
import { ProductInterface } from './shared/interfaces';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input('products-arr') productsArr: Array<ProductInterface> = [];

  selected!: number;

  constructor() {}

  handleRowClick(id: number) {
    this.productsArr[id].isSelected = !this.productsArr[id].isSelected;
    this.selected = id;
  }
}

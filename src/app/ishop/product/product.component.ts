import { Component, Input, Output } from '@angular/core';
import { ProductInterface } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input('products-arr') productsArr: Array<ProductInterface> = [];

  
  selected!: number | null;

  // @Output('selected-row') public selectedRow: number | null = this.selected;
  
  constructor() {}

  handleRowClick(id: number) {        
    if (this.selected && this.selected === id) {
      this.selected = null;
      return;
    }
    this.selected = id;
  }

  delete(event: Event, id: number) {
    event.stopPropagation();

    let confirmDelete = confirm(`Delete this ${this.productsArr[id].title} product from the list?`);

    if (confirmDelete) {
      this.productsArr = this.productsArr.filter(item => item.id !== id);
    }
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductCardState, ProductInterface } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent{
  @Input('products-arr') productsArr: Array<ProductInterface> = [];
  @Input('selected') selected!: number | null;
  @Input() productCardState!: ProductCardState;

  @Output('row-clicked') public rowClicked = new EventEmitter<number>();
  @Output('product-deleted') public productDeleted = new EventEmitter<number>();
  @Output('product-edited') public productEdited = new EventEmitter<number>();


  handleRowClick(id: number | null) {
    if (typeof id !== 'number') throw new Error('The argument ID must be a number');
    this.rowClicked.emit(id)
  }

  handleDelete(event: Event, id: number | null) {
    if (typeof id !== 'number') throw new Error('The argument ID must be a number');
    event.stopPropagation();
    this.productDeleted.emit(id);
  }

  handleEdit(event: Event, id: number | null) {
    if (typeof id !== 'number') throw new Error('The argument ID must be a number');
    event.stopPropagation();
    this.productEdited.emit(id);
  }
}

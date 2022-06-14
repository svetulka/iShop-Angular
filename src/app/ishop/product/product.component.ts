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

  @Output('on-row-click') public onRowClick = new EventEmitter<number>();
  @Output('on-delete') public onDelete = new EventEmitter<number>();
  @Output('on-edit') public onEdit = new EventEmitter<number>();


  constructor() {
  }

  handleRowClick(id: number) {
    this.onRowClick.emit(id);   
  }

  handleDelete(event: Event, id: number) {
    event.stopPropagation();
    this.onDelete.emit(id);
  }

  handleEdit(event: Event, id: number) {
    // event.stopPropagation();
    this.onEdit.emit(id);
  }

}

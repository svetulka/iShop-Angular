import { Component, EventEmitter, Input, Output, OnChanges, SimpleChange } from '@angular/core';
import { ProductInterface } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent{
  @Input('products-arr') productsArr: Array<ProductInterface> = [];
  @Input('selected') selected!: number | null;

  @Output('on-row-click') public onRowClick = new EventEmitter<number>();
  @Output('on-delete') public onDelete = new EventEmitter<number>();
  @Output('on-edit') public onEdit = new EventEmitter<number>();


  constructor() {
  }

  ngOnChanges(changes:SimpleChange) {
    console.log(changes)
  }

  handleRowClick(id: number) {
    this.onRowClick.emit(id);   
  }

  handleDelete(event: Event, id: number) {
    event.stopPropagation();
    this.onDelete.emit(id);
  }

  handleEdit(event: Event, id: number) {
    event.stopPropagation();
    this.onEdit.emit(id);
  }
}

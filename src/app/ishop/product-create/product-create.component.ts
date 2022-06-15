import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductInterface } from 'src/app/shared/interfaces';

@Component({
	selector: 'app-product-create',
	templateUrl: './product-create.component.html',
	styleUrls: ['./product-create.component.scss']
})

export class ProductCreateComponent implements OnInit{
	@Output('on-cancel') public onCancel = new EventEmitter();
	@Output('add-product') public addProduct = new EventEmitter<ProductInterface>();
	
	product: ProductInterface = {
		id: null,
		title: '',
		price: 0,
		picture: '',
		countInStock: 0,
	}
	
	ngOnInit(): void {
		this.product.id = parseInt(`${Date.now()}${Math.floor(Math.random() * 100)}`);
	}

	handleCancelClick() {
		this.onCancel.emit();
	}

}

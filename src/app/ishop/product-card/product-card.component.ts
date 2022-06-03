import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductInterface } from 'src/app/shared/interfaces';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.scss']
})

export class ProductCardComponent implements OnInit {
	@Input('products-arr') productsArr: Array<ProductInterface> = [];
	// @Input('selected-row') selectedRow!: number | null;
	
	constructor(){
		console.log('this.productsArr', this.productsArr);		
	}
	
	ngOnInit(): void {
		// console.log('this.selectedRow', this.selectedRow);		
	}


}
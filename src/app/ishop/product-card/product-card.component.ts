import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductInterface } from 'src/app/shared/interfaces';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.scss']
})

export class ProductCardComponent implements OnInit {
	@Input('products-arr') productsArr: Array<ProductInterface> = [];
	@Input('selected') selected: number | null = null;
	
	constructor(){}
	
	ngOnInit(): void {}

}
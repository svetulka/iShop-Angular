import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.scss']
})

export class ProductCardComponent {
	@Input('selected-title') selectedTitle!: string | null;
	@Input('selected-price') selectedPrice!: string | null;
	@Input('selected-picture') selectedPicture!: string | null;
	@Input('selected-count-in-stock') selectedCountInStock!: number | null;

}
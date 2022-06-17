import { Component, Input } from '@angular/core';
import { ProductCardState } from 'src/app/shared/interfaces';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.scss']
})

export class ProductCardComponent {
	@Input('selected-id') selectedId!: number | null;
	@Input('selected-title') selectedTitle!: string | null;
	@Input('selected-price') selectedPrice!: number | null;
	@Input('selected-picture') selectedPicture!: string | null;
	@Input('selected-count-in-stock') selectedCountInStock!: number | null;
	@Input() productCardState!: ProductCardState;

}

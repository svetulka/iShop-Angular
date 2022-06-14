import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-product-edit',
	templateUrl: './product-edit.component.html',
	styleUrls: ['./product-edit.component.scss']
})

export class ProductEditComponent {
	@Input('edit-title') editTitle!: string | null;
	@Input('edit-price') editPrice!: string | null;
	@Input('edit-picture') editPicture!: string | null;
	@Input('edit-count-in-stock') editCountInStock!: number | null;
}

import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductInterface } from 'src/app/shared/interfaces';

@Component({
	selector: 'app-product-edit',
	templateUrl: './product-edit.component.html',
	styleUrls: ['./product-edit.component.scss']
})

export class ProductEditComponent implements OnInit{
	@Input('edit-id') editId: number | null;
	@Input('edit-title') editTitle: string | null;
	@Input('edit-price') editPrice: number | null;
	@Input('edit-picture-url') editPictureUrl: string | null;
	@Input('edit-count-in-stock') editCountInStock: number | null;

	@Output('product-canceled') public productCanceled = new EventEmitter();
	@Output('product-updated') public productUpdated = new EventEmitter<ProductInterface>();
	
	formEditProduct: FormGroup;
	pictureUrlFC: any;

	ngOnInit(): void {
		this.formEditProduct = new FormGroup({
			id: new FormControl(this.editId),
			title: new FormControl(this.editTitle, [
				Validators.required
			]),
			pictureUrl: new FormControl(this.editPictureUrl, [
				Validators.required,
				Validators.pattern('(http)?s?:?(\/\/[^"]*\.(?:png|jpg|jpeg|gif|png|svg))')
			]),
			price: new FormControl(this.editPrice, [
				Validators.required
			]),
			countInStock: new FormControl(this.editCountInStock, [
				Validators.required
			])
		});

		this.pictureUrlFC = this.formEditProduct.get('pictureUrl');
	}

	handleCancelClick() {
		this.productCanceled.emit();
	}

	submit() {
		const product: ProductInterface = {
			...this.formEditProduct.value,
			id: this.editId
		};
		this.productUpdated.emit(product);
		this.formEditProduct.reset();
	}
	
}

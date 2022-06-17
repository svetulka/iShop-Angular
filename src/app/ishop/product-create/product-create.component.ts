import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductInterface } from 'src/app/shared/interfaces';

@Component({
	selector: 'app-product-create',
	templateUrl: './product-create.component.html',
	styleUrls: ['./product-create.component.scss']
})

export class ProductCreateComponent implements OnInit{
	@Output('product-canceled') public productCanceled = new EventEmitter();
	@Output('product-added') public productAdded = new EventEmitter<ProductInterface>();
	
	productId: number;
	formCreateProduct: FormGroup;
	pictureUrlFC: any;

	ngOnInit(): void {
		this.productId = parseInt(`${Date.now()}${Math.floor(Math.random() * 100)}`);

		this.formCreateProduct = new FormGroup({
			title: new FormControl('', [
				Validators.required
			]),
			pictureUrl: new FormControl('', [
				Validators.required,
				Validators.pattern('(http)?s?:?(\/\/[^"]*\.(?:png|jpg|jpeg|gif|png|svg))')
			]),
			price: new FormControl('', [
				Validators.required
			]),
			countInStock: new FormControl('', [
				Validators.required
			])
		});

		this.pictureUrlFC = this.formCreateProduct.get('pictureUrl');
	}

	handleCancelClick() {
		this.productCanceled.emit();
	}

	submit() {
		const product: ProductInterface = {
			...this.formCreateProduct.value,
			id: this.productId
		};
		this.productAdded.emit(product);
		this.formCreateProduct.reset();
	}

}

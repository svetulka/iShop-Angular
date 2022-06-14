import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-product-create',
	templateUrl: './product-create.component.html',
	styleUrls: ['./product-create.component.scss']
})

export class ProductCreateComponent {
	
	@Output('on-cancel') public onCancel = new EventEmitter();

	handleCancelClick() {
		this.onCancel.emit();
	}
	
	addProduct(){		
	};
}

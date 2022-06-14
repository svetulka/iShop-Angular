export interface ProductInterface{
	id: number;
	title: string;
	price: string;
	picture: string;
	countInStock: number;
}

export enum ProductCardState {
	nothing = 'nothing',
	show = 'show',
	edit = 'edit',
	create = 'create'
}

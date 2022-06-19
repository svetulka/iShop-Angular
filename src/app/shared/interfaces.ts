export interface ProductInterface{
	id: number | null;
	title: string;
	price: number;
	pictureUrl: string;
	countInStock: number;
}

export enum ProductCardState {
	nothing = 'nothing',
	show = 'show',
	edit = 'edit',
	create = 'create'
}

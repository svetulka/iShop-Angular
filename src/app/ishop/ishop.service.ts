import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductInterface } from '../shared/interfaces';

@Injectable()
export class ProductsService {
	constructor(private http: HttpClient) { }

	getData() {
		return this.http.get('assets/products.json')
	}
}

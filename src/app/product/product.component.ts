import { Component, OnInit, Input } from '@angular/core';
import { productInterface } from './shared/interfaces';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input('products-arr') productsArr: Array<productInterface>;
  @Input('shop-title') shopTitle: string;
  
  constructor() {
    this.productsArr = [];
    this.shopTitle = '';
   }
  
  ngOnInit(): void {
  }


}

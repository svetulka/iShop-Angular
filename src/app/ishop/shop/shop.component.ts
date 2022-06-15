import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ProductCardState, ProductInterface } from 'src/app/shared/interfaces';
import { ProductsService } from '../ishop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],

})

export class ShopComponent implements OnInit {
  @Input('shop-title') shopTitle!: string;

  products: ProductInterface[] = [];

  selected!: number | null;

  selectedTitle!: string | null;
  selectedPrice!: number | null;
  selectedPicture!: string | null;
  selectedCountInStock!: number | null;
  productCardState: ProductCardState = ProductCardState.nothing;
  
  constructor(private productsService: ProductsService) { }
  
  get ProductCardState() {
    return ProductCardState;
  }


  ngOnInit() {   
    this.productsService.getData().subscribe((data: any) => this.products = data);
  }

  onCreate(product: ProductInterface): void {

  }

  onDelete(id: number) {
    let confirmDelete = confirm(`Delete this ${this.products[id].title} product from the list?`);

    if (confirmDelete) {
      this.products = this.products.filter(item => item.id !== id);
      this.productCardState = ProductCardState.nothing;
      this.resetSelectedProps();
    }
  }

  onEdit(id: number) {
    this.productCardState = ProductCardState.edit;
    console.log('Click Edit button');
  }

  onRowClick(id: number) {
    const index = this.products.findIndex((item) => item.id == id);

    if (this.selected === index) {
      this.resetSelectedProps();
      this.productCardState = ProductCardState.nothing;
      return;
    }
    this.productCardState = ProductCardState.show;
    this.selected = index;
    this.selectedTitle = this.products[index].title;
    this.selectedPrice = this.products[index].price;
    this.selectedPicture = this.products[index].picture;
    this.selectedCountInStock = this.products[index].countInStock;
  }

  resetSelectedProps() {
    this.selected = null;
    this.selectedTitle = null;
    this.selectedPrice = null;
    this.selectedPicture = null;
    this.selectedCountInStock = null;
  }

  addNewProduct() {
    console.log('addNewProduct click!');
    this.productCardState = ProductCardState.create;
  }

  setProductCardState(newState: ProductCardState) {
    this.productCardState = newState;
  }

}

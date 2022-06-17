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

  selectedIndex: number | null;

  selectedId: number | null;
  selectedTitle: string | null;
  selectedPrice: number | null;
  selectedPictureUrl: string | null;
  selectedCountInStock: number | null;


  productCardState: ProductCardState = ProductCardState.nothing;
  
  constructor(private productsService: ProductsService) { }
  
  get ProductCardState() {
    return ProductCardState;
  }

  ngOnInit() {   
    this.productsService.getData().subscribe((data: any) => this.products = data);
  }

  onCreate(product: ProductInterface): void {
    this.products.push(product);
  }

  updateProduct(product: ProductInterface) {
    //mutable
    //мутируешь только нужный элемент массива, ссылка массива остается прежней
    // const index = this.products.findIndex(item => item.id === product.id);
    // this.products.splice(index, 1, product);

    // -------------------------

    //immutable
    //копируешь массив (спредом). изменяешь нужный элемент, вставляешь измененный массив в this.products.
    this.products = this.products.map(elem => elem.id !== product.id ? elem : product);
    
    if (product.id) {
      this.switchToCardViewMode(product.id);
    }

  }
  
  productDeleted(id: number) {
    const index = this.products.findIndex(item => item.id === id);

    if (index === -1) throw new Error('No product with this ID: ' + id);

    let confirmDelete = confirm(`Delete this ${this.products[index].title} product from the list?`);

    if (confirmDelete) {
      this.products = this.products.filter(item => item.id !== id);
      this.productCardState = ProductCardState.nothing;
      this.resetSelectedProps();
    }
  }

  switchToEditMode(id: number) {
    this.selectedId = id;

    const index = this.products.findIndex((item) => item.id == id);
    
    this.selectedIndex = index;
    this.selectedId = this.products[index].id;
    this.selectedTitle = this.products[index].title;
    this.selectedPrice = this.products[index].price;
    this.selectedPictureUrl = this.products[index].pictureUrl;
    this.selectedCountInStock = this.products[index].countInStock;

    this.productCardState = ProductCardState.edit;
    
  }

  switchToCardViewMode(id: number) {
    const index = this.products.findIndex((item) => item.id == id);

    if (this.selectedIndex === index) {
      this.resetSelectedProps();
      this.productCardState = ProductCardState.nothing;
      return;
    }

    this.selectedIndex = index;
    this.selectedId = this.products[index].id;
    this.selectedTitle = this.products[index].title;
    this.selectedPrice = this.products[index].price;
    this.selectedPictureUrl = this.products[index].pictureUrl;
    this.selectedCountInStock = this.products[index].countInStock;
    this.productCardState = ProductCardState.show;
  }

  resetSelectedProps() {
    this.selectedIndex = null;
    this.selectedTitle = null;
    this.selectedPrice = null;
    this.selectedPictureUrl = null;
    this.selectedCountInStock = null;
  }

  addNewProduct() {
    this.productCardState = ProductCardState.create;
    this.resetSelectedProps();
  }

  setProductCardState(newState: ProductCardState) {
    this.productCardState = newState;
  }
}

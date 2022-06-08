import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/shared/interfaces';
import { HttpService } from '../ishop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  providers: [HttpService]
})

export class ShopComponent implements OnInit {
  @Input('shop-title') shopTitle!: string;

  products: ProductInterface[] = [];
  selected!: number | null;

  selectedTitle!: string | null;
  selectedPrice!: string | null;
  selectedPicture!: string | null;
  selectedCountInStock!: number | null;
  
  constructor(private httpService: HttpService) { }
 
  ngOnInit() {    
    this.httpService.getData().subscribe((data: any) => this.products = data);
  }

  onDelete(id: number) {
    let confirmDelete = confirm(`Delete this ${this.products[id].title} product from the list?`);

    if (confirmDelete) {
      this.products = this.products.filter(item => item.id !== id);
      this.resetSelectedProps();
    }
  }

  onEdit(id: number) {
    
  }

  onRowClick(id: number) {
    const index = this.products.findIndex((item) => item.id == id);

    if (this.selected === index) {
      this.resetSelectedProps();
      return;
    }

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
    console.log('CLick on Add new product button');
  }
}

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
  selected: number | null = null;
  
  constructor(private httpService: HttpService) { }

  ngOnInit() {    
    this.httpService.getData().subscribe((data: any) => this.products = data);
  }

  onDelete(id: number) {
    let confirmDelete = confirm(`Delete this ${this.products[id].title} product from the list?`);

    if (confirmDelete) {
      this.products = this.products.filter(item => item.id !== id);
    }
  }

  onRowClick(id: number) {
    if (this.selected === id) {
      this.selected = null;
      return;
    }
    this.selected = id;
  }

}

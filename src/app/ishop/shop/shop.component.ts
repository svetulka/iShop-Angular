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

  products = [];
  
  constructor(private httpService: HttpService) { }

  ngOnInit() {    
    this.httpService.getData().subscribe((data: any) => this.products = data);
  }
}

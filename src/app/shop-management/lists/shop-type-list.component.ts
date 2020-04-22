import { Component, OnInit } from '@angular/core';
import { ShopTypeListItem } from '../models/shop-type-list-item';
import { ShopTypeService } from '../services/shop-type.service';

@Component({
  selector: 'app-shop-type-list',
  templateUrl: './shop-type-list.component.html',
  styleUrls: ['./shop-type-list.component.css']
})
export class ShopTypeListComponent implements OnInit {

  shopTypes: ShopTypeListItem[];

  constructor(private shopTypeService: ShopTypeService) { }

  ngOnInit() {
    this.getShopTypes();
  }

  getShopTypes() {
    this.shopTypeService.getShopTypes().subscribe(h => this.shopTypes = h);
  }
}

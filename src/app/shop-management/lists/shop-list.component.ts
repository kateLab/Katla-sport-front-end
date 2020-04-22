import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShopListItem } from '../models/shop-list-item';
import { ShopTypeService } from '../services/shop-type.service';
import { ShopService } from '../services/shop.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {

  shopTypeId: number;
  shops: Array<ShopListItem>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private shopTypeService: ShopTypeService,
    private shopService: ShopService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.shopTypeId = p['id'];
      this.shopTypeService.getShops(this.shopTypeId).subscribe(s => this.shops = s);
    })
  }

  onDelete(shopId: number) {
    var requiredShop = this.shops.find(h => h.id == shopId);
    this.shopService.setShopStatus(shopId, true).subscribe(c => requiredShop.isDeleted = true);
  }

  onUndelete(shopId: number) {
    var requiredShop = this.shops.find(h => h.id == shopId);
    this.shopService.setShopStatus(shopId, false).subscribe(c => requiredShop.isDeleted = false);
  }
}

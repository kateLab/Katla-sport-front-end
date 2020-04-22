import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShopService } from '../services/shop.service';
import { Shop } from '../models/shop';

@Component({
  selector: 'app-shop-form',
  templateUrl: './shop-form.component.html',
  styleUrls: ['./shop-form.component.css']
})
export class ShopFormComponent implements OnInit {

  shop = new Shop(0, "", "", "", "", 0, false);
  existed = false;
  shopTypeId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private shopService: ShopService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.shopTypeId = p['shopTypeId']
      if (p['id'] === undefined) return;
      this.shopService.getShop(p['id']).subscribe(s => this.shop = s);
      this.existed = true;
    });
  }

  navigateToShops() {
    this.router.navigate([`/shopType/${this.shopTypeId}/shops`]);
  }

  onCancel() {
    this.navigateToShops();
  }

  onSubmit() {
    this.shop.shopTypeId = this.shopTypeId;
    if (this.existed) {
      this.shopService.updateShop(this.shop).subscribe(h => this.navigateToShops());
    }
    else {
      this.shopService.addShop(this.shop).subscribe(h => this.navigateToShops());
    }
  }

  onDelete() {
    this.shopService.setShopStatus(this.shop.id, true).subscribe(h => this.shop.isDeleted = true);
  }

  onUndelete() {
    this.shopService.setShopStatus(this.shop.id, false).subscribe(h => this.shop.isDeleted = false);
  }

  onPurge() {
    this.shopService.deleteShop(this.shop.id).subscribe(h => this.navigateToShops());
  }
}

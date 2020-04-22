import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShopTypeService } from '../services/shop-type.service';
import { ShopType } from '../models/shop-type';

@Component({
  selector: 'app-shop-type-form',
  templateUrl: './shop-type-form.component.html',
  styleUrls: ['./shop-type-form.component.css']
})
export class ShopTypeFormComponent implements OnInit {

  shopType = new ShopType(0, "");
  existed = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private shopTypeService: ShopTypeService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(p => {
      if (p['id'] === undefined) return;
      this.shopTypeService.getShopType(p['id']).subscribe(h => this.shopType = h);
      this.existed = true;
    });
  }

  navigateToShopType() {
    this.router.navigate(['/types']);
  }

  onCancel() {
    this.navigateToShopType();
  }

  onSubmit() {
    if (this.existed) {
      this.shopTypeService.updateShopType(this.shopType).subscribe(h => this.navigateToShopType());
    }
    else {
      this.shopTypeService.addShopType(this.shopType).subscribe(h => this.navigateToShopType());
    }
  }

  onDelete() {
    this.shopTypeService.deleteShopType(this.shopType.id).subscribe(h => this.navigateToShopType());
  }
}

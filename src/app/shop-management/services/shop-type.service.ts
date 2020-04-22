import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { ShopType } from '../models/shop-type';
import { ShopTypeListItem } from '../models/shop-type-list-item';
import { ShopListItem } from '../models/shop-list-item';

@Injectable({
  providedIn: 'root'
})
export class ShopTypeService {
  private url = environment.apiUrl + 'api/types/';

  constructor(private http: HttpClient) { }

  getShopTypes(): Observable<Array<ShopTypeListItem>> {
    return this.http.get<Array<ShopTypeListItem>>(`${this.url}show`);
  }

  getShopType(shopTypeId: number): Observable<ShopType> {
    return this.http.get<ShopType>(`${this.url}show/${shopTypeId}`);
  }

  getShops(shopTypeId: number): Observable<Array<ShopListItem>> {
    return this.http.get<Array<ShopListItem>>(`${this.url}show/${shopTypeId}/shops`);
  }

  addShopType(shopType: ShopType): Observable<ShopType> {
    return this.http.post<ShopType>(`${this.url}create`, shopType);
  }

  updateShopType(shopType: ShopType): Observable<Object> {
    return this.http.post<Object>(`${this.url}update/${shopType.id}`, shopType);
  }

  deleteShopType(shopTypeId: number): Observable<Object> {
    return this.http.post<Object>(`${this.url}destroy/${shopTypeId}`, null);
  }
}

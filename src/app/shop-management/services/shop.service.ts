import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Shop } from '../models/shop';
import { ShopListItem } from '../models/shop-list-item';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private url = environment.apiUrl + 'api/shops/';

  constructor(private http: HttpClient) { }

  getShops(): Observable<Array<ShopListItem>> {
    return this.http.get<Array<ShopListItem>>(this.url);
  }

  getShop(ShopId: number): Observable<Shop> {
    return this.http.get<Shop>(`${this.url}${ShopId}`);
  }

  setShopStatus(ShopId: number, deletedStatus: boolean): Observable<Object> {
    return this.http.put<Object>(`${this.url}${ShopId}/status/${deletedStatus}`, null);
  }

  addShop(Shop: Shop): Observable<Shop> {
    return this.http.post<Shop>(`${this.url}`, Shop);
  }

  updateShop(Shop: Shop): Observable<Object> {
    return this.http.put<Object>(`${this.url}${Shop.id}`, Shop);
  }

  deleteShop(ShopId: number): Observable<Object> {
    return this.http.delete<Object>(`${this.url}${ShopId}`);
  }
}

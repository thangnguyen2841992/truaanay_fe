import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class CouponService {

  constructor(private http: HttpClient) { }

  getCouponByDishId(dishId: number) {
    return this.http.get(`${API_URL}/coupons/dishes/${dishId}`);
  }

  getCouponByMerchantId(merchantId: number) {
    return this.http.get(`${API_URL}/coupons/merchants/${merchantId}`);
  }
}

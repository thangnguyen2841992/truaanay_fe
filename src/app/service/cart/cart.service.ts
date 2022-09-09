import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../auth/auth.service';
import {CartDetail} from '../../model/cart-detail';
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpClient: HttpClient,
              private authService: AuthService) { }
  getCurrentUserCarts() {
    const currentUserId = this.authService.getCurrentUserId();
    return this.httpClient.get(`${API_URL}/carts/users/${currentUserId}`);
  }

  addDishToCart(cartDetail: CartDetail) {
    return this.httpClient.post(`${API_URL}/carts/users/current-user/add-dish-to-cart`, cartDetail);
  }

  increaseDishQuantity(cartId: number, dishId: number) {
    return this.httpClient.get(`${API_URL}/carts/${cartId}/increase-dish-quantity/${dishId}`);
  }

  decreaseDishQuantity(cartId: number, dishId: number) {
    return this.httpClient.get(`${API_URL}/carts/${cartId}/decrease-dish-quantity/${dishId}`);
  }

  getCurrentUserCartByMerchant(merchantId: number){
    const currentUserId = this.authService.getCurrentUserId();
    return this.httpClient.get(`${API_URL}/carts/users/${currentUserId}/merchants/${merchantId}`);
  }
}

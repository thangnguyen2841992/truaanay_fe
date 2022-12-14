import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Dish} from '../../model/dish';
import {SearchForm} from '../../model/search-form';
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<Dish[]> {
    return this.httpClient.get<Dish[]>(`${API_URL}/dishes/page/$pageNumber`);
  }

  getById(id: number): Observable<Dish> {
    return this.httpClient.get<Dish>(`${API_URL}/dishes/${id}`);
  }

  createMerchantDish(merchantId, dish): Observable<Dish> {
    return this.httpClient.post(`${API_URL}/dishes/dish/create/merchant/${merchantId}`, dish);
  }

  updateDish(id: number, dish: FormData): Observable<Dish> {
    return this.httpClient.put(`${API_URL}/dishes/dish/${id}`, dish);
  }
  deleteDish(id:number): Observable<Dish> {
    return this.httpClient.delete<Dish>(`${API_URL}/dishes/${id}`);
  }
  deleteMerchantDish(id: number): Observable<Dish> {
    return this.httpClient.delete(`${API_URL}/merchants/dish/${id}`);
  }

  getMostPurchasedDishes() {
    return this.httpClient.get(`${API_URL}/dishes/most-purchased/8`);
  }

  getAllMerchantDishesByOwnerId(userId: number): Observable<Dish[]> {
    return this.httpClient.get<Dish[]>(`${API_URL}/merchants/user/${userId}/merchant/dishes`);
  }

  searchDishes(searchForm: SearchForm) {
    return this.httpClient.post<Dish[]>(`${API_URL}/dishes/search`, searchForm);
  }

  getAllMerchantDishesByMerchantId(merchantId: number): Observable<Dish[]> {
    return this.httpClient.get<Dish[]>(`${API_URL}/dishes/merchants/${merchantId}`);
  }

  findDishesWithSameCategoryWith(dishId: number, limit: number): Observable<Dish[]> {
    return this.httpClient.get<Dish[]>(`${API_URL}/dishes/${dishId}/top-${limit}-same-category`);
  }
}

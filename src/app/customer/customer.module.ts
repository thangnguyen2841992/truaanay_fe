import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer/customer.component';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import { FoodCardComponent } from './food-card/food-card.component';
import {MerchantModule} from '../merchant/merchant.module';
import { MostPurchasedDishesComponent } from './most-purchased-dishes/most-purchased-dishes.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { DetailFoodComponent } from './detail-food/detail-food.component';
import { CartsTableComponent } from './carts-table/carts-table.component';
import { PeopleAlsoLikeComponent } from './people-also-like/people-also-like.component';
import { MerchantBannerComponent } from './merchant-banner/merchant-banner.component';


@NgModule({
  declarations: [CustomerComponent, FoodCardComponent, MostPurchasedDishesComponent, JoinUsComponent, DetailFoodComponent, CartsTableComponent, PeopleAlsoLikeComponent, MerchantBannerComponent],
    imports: [
        CommonModule,
        CustomerRoutingModule,
        FormsModule,
        SharedModule,
        MerchantModule
    ]
})
export class CustomerModule { }

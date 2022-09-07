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


@NgModule({
  declarations: [CustomerComponent, FoodCardComponent, MostPurchasedDishesComponent, JoinUsComponent],
    imports: [
        CommonModule,
        CustomerRoutingModule,
        FormsModule,
        SharedModule,
        MerchantModule
    ]
})
export class CustomerModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer/customer.component';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import { FoodCardComponent } from './food-card/food-card.component';


@NgModule({
  declarations: [CustomerComponent, FoodCardComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class CustomerModule { }

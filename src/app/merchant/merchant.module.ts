import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MerchantRoutingModule } from './merchant-routing.module';
import { CreateDishComponent } from './create-dish/create-dish.component';
import {ReactiveFormsModule} from '@angular/forms';
import { DishesComponent } from './dishes/dishes.component';
import {SharedModule} from '../shared/shared.module';
import { MyMerchantBannerComponent } from './my-merchant-banner/my-merchant-banner.component';
import { FooterComponent } from './footer/footer.component';
import { MerchantSecondNavbarComponent } from './merchant-second-navbar/merchant-second-navbar.component';
import { MerchantRegisterComponent } from './merchant-register/merchant-register.component';


@NgModule({
    declarations: [CreateDishComponent, DishesComponent, MyMerchantBannerComponent, FooterComponent, MerchantSecondNavbarComponent, MerchantRegisterComponent],
    exports: [
        FooterComponent
    ],
    imports: [
        CommonModule,
        MerchantRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class MerchantModule { }

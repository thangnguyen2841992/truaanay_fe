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
import { MerchantInfoComponent } from './merchant-info/merchant-info.component';
import { DishEditComponent } from './dish-edit/dish-edit.component';
import { DishDeleteComponent } from './dish-delete/dish-delete.component';
import {ModalModule} from 'ngx-bootstrap/modal';
import { MerchantBannedComponent } from './merchant-banned/merchant-banned.component';
import { MerchantVsattpComponent } from './merchant-vsattp/merchant-vsattp.component';


@NgModule({
    declarations: [CreateDishComponent, DishesComponent, MyMerchantBannerComponent, FooterComponent, MerchantSecondNavbarComponent, MerchantRegisterComponent, MerchantInfoComponent, DishEditComponent, DishDeleteComponent, MerchantBannedComponent, MerchantVsattpComponent],
    exports: [
        FooterComponent
    ],
    imports: [
        CommonModule,
        MerchantRoutingModule,
        ReactiveFormsModule,
        SharedModule,
      ModalModule.forRoot(),

    ]
})
export class MerchantModule { }

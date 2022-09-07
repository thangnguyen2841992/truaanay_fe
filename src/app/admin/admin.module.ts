import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { MerchantListComponent } from './merchant-list/merchant-list.component';
import {SharedModule} from '../shared/shared.module';
import { MerchantRegisterListComponent } from './merchant-register-list/merchant-register-list.component';


@NgModule({
  declarations: [AdminComponent, MerchantListComponent, MerchantRegisterListComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }

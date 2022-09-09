import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { MerchantListComponent } from './merchant-list/merchant-list.component';
import {SharedModule} from '../shared/shared.module';
import { MerchantRegisterListComponent } from './merchant-register-list/merchant-register-list.component';
import { MerchantViewComponent } from './merchant-view/merchant-view.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [AdminComponent, MerchantListComponent, MerchantRegisterListComponent, MerchantViewComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }

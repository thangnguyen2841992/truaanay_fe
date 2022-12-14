import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { NavbarCustomerComponent } from './navbar-customer/navbar-customer.component';
import { SidebarAdminComponent } from './sidebar-admin/sidebar-admin.component';
import { SidebarMerchantComponent } from './sidebar-merchant/sidebar-merchant.component';
import { SidebarUserComponent } from './sidebar-user/sidebar-user.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [NavbarAdminComponent, NavbarCustomerComponent, SidebarAdminComponent, SidebarMerchantComponent, SidebarUserComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidebarAdminComponent,
    NavbarAdminComponent,
    NavbarCustomerComponent,
    SidebarMerchantComponent,
    SidebarUserComponent,
  ]
})
export class SharedModule { }

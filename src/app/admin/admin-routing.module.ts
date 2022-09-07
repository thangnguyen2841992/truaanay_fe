import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MerchantListComponent} from './merchant-list/merchant-list.component';
import {AdminComponent} from './admin/admin.component';
import {MerchantRegisterListComponent} from './merchant-register-list/merchant-register-list.component';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent
  },
  {
    path: 'merchant-register/list',
    component: MerchantRegisterListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MerchantListComponent} from './merchant-list/merchant-list.component';
import {AdminComponent} from './admin/admin.component';
import {MerchantRegisterListComponent} from './merchant-register-list/merchant-register-list.component';
import {MerchantViewComponent} from './merchant-view/merchant-view.component';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent
  },
  {
    path: 'merchant-register/list',
    component: MerchantRegisterListComponent
  },
  {
    path: 'merchant/view/:id',
    component: MerchantViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

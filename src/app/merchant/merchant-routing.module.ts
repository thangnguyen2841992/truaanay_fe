import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CreateDishComponent} from './create-dish/create-dish.component';
import {DishesComponent} from './dishes/dishes.component';
import {MerchantRegisterComponent} from './merchant-register/merchant-register.component';
import {MerchantInfoComponent} from './merchant-info/merchant-info.component';
import {DishEditComponent} from './dish-edit/dish-edit.component';
import {MerchantBannedComponent} from './merchant-banned/merchant-banned.component';


const routes: Routes = [
  {
    path: '',
    component: DishesComponent
  },

  {
    path: 'dish/create',
    component: CreateDishComponent
  },
  {
    path: 'dish/edit/:id',
    component: DishEditComponent
  },

  {
    path: 'merchant-register',
    component: MerchantRegisterComponent
  },
  {
    path : 'info',
    component: MerchantInfoComponent
  },
  {
    path: 'banned',
    component: MerchantBannedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MerchantRoutingModule {
}

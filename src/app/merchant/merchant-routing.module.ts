import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CreateDishComponent} from './create-dish/create-dish.component';
import {DishesComponent} from './dishes/dishes.component';
import {MerchantRegisterComponent} from './merchant-register/merchant-register.component';


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
    path: 'merchant-register',
    component: MerchantRegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MerchantRoutingModule {
}

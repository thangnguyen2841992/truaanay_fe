import {Component, OnInit, TemplateRef} from '@angular/core';
import {Merchant} from '../../model/merchant';
import {Dish} from '../../model/dish';
import {AuthService} from '../../service/auth/auth.service';
import {DishService} from '../../service/dish/dish.service';
import {MerchantService} from '../../service/merchant/merchant.service';
import {Router} from '@angular/router';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {NotificationService} from '../../service/notification/notification.service';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {
  merchant: Merchant = {};
  dishes: Dish[] = [];
  currentUserId: number;
  modalRef: BsModalRef;
  dishId: number;
  constructor(private authService: AuthService,
              private dishService: DishService,
              private merchantService: MerchantService,
              private router: Router,
              private modalService: BsModalService,
              private notificationService: NotificationService) {
    this.currentUserId = this.authService.currentUserValue.id;
  }

  ngOnInit() {
    this.getMerchant();
    this.getAllMerchantDishes();
  }
  getMerchant() {
    this.merchantService.getCurrentUserMerchant(this.currentUserId).subscribe(
      merchant => {
        this.merchant = merchant;
        if (!merchant.active) {
          this.router.navigateByUrl('/merchant/banned');
        }
      }
    );
  }

  getAllMerchantDishes() {
    const userId = this.authService.getCurrentUserId();
    this.dishService.getAllMerchantDishesByOwnerId(userId).subscribe(dishesFromBE => {
      this.dishes = dishesFromBE as Dish[];
      for (let i = 0; i < this.dishes.length; i++) {
        console.log(this.dishes[i].image);
      }
    });
  }

  openModalDeleteDish(templateDeleteDish: TemplateRef<any>, dishId: number) {
    this.modalRef = this.modalService.show(
      templateDeleteDish,
      Object.assign({}, {class: 'gray modal-lg'})
    );
    this.dishId = dishId;
  }

  deleteDish() {
    this.dishService.deleteDish(this.dishId).subscribe((dish) => {
      this.getAllMerchantDishes();
      this.modalRef.hide();
      this.notificationService.showSuccessMessage('Xóa món ăn thành công!');
    })
  }
}

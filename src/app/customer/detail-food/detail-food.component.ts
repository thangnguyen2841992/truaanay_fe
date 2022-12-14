import {Component, OnInit} from '@angular/core';
import {Merchant} from '../../model/merchant';
import {Dish} from '../../model/dish';
import {DishService} from '../../service/dish/dish.service';
import {CartService} from '../../service/cart/cart.service';
import {NotificationService} from '../../service/notification/notification.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Coupon} from '../../model/coupon';
import {AuthService} from '../../service/auth/auth.service';
import {CouponService} from '../../service/coupon/coupon.service';

@Component({
  selector: 'app-detail-food',
  templateUrl: './detail-food.component.html',
  styleUrls: ['./detail-food.component.css']
})
export class DetailFoodComponent implements OnInit {
  id: number;
  merchant: Merchant = {};
  dish: Dish = {categories: [], merchant: {}};
  dishesForYou: Dish[] = [];
  quantity: number;
  coupons: Coupon[];
  countChanges = 0;
  dishTotal: number;

  constructor(private dishService: DishService,
              private cartService: CartService,
              private notificationService: NotificationService,
              private router: Router,
              private authService: AuthService,
              private couponService: CouponService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getMerchant();
    });
  }

  ngOnInit() {
    document.getElementById('dish-image').scrollIntoView(true);

    this.quantity = 1;
    this.getDish();
    this.getMerchant();
    this.getCouponByDishId();
  }

  getCouponByDishId() {
    this.couponService.getCouponByDishId(this.id).subscribe(
      response => this.coupons = response as Coupon[]
    );
  }

  getDish() {
    this.dishService.getById(this.id).subscribe(
      (response) => {
        this.dish = response as Dish;
        this.calculateDishTotal();
        window.scroll(0, 0);
      }
    );
  }

  getMerchant() {
    this.dishService.getById(this.id).subscribe(
      (response) => {
        this.dish = response as Dish;
        this.merchant = this.dish.merchant;
      }
    );
  }

  refreshCarts($event) {
    this.countChanges = $event;
  }

  increaseQuantity() {
    this.quantity++;
    this.calculateDishTotal();
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
      this.calculateDishTotal();
    }
  }


  calculateDishTotal() {
    this.dishTotal = this.dish.price * this.quantity;
  }

  addToCart() {
    if (!this.authService.isLoggedIn()) {
      document.getElementById('app-navbar-customer').scrollIntoView(true);
      this.notificationService.showErrorMessage('H??y ????ng nh???p ????? c?? th??? ?????t m??n');
      return;
    }
    const cartDetail = {
      dish: this.dish,
      quantity: this.quantity
    };
    this.cartService.addDishToCart(cartDetail).subscribe(
      {
        next: (response) => {
          this.notificationService.showSuccessMessage(`???? th??m v??o gi??? h??ng </br> (${this.dish.name}) x ${this.quantity}`);
        },
        error: (error) => {
          this.notificationService.showErrorMessage('C?? l???i x???y ra!');
        },
        complete: () => {
          this.quantity = 1;
          this.dishTotal = this.dish.price;
          this.countChanges++;
          // this.refreshNum++;
          // this.refreshCarts.emit(this.refreshNum);
        }
      }
    );
  }
}

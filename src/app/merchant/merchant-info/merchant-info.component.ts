import { Component, OnInit } from '@angular/core';
import {Merchant} from '../../model/merchant';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MerchantService} from '../../service/merchant/merchant.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../service/auth/auth.service';
import {NotificationService} from '../../service/notification/notification.service';
import {UserService} from '../../service/user/user.service';

@Component({
  selector: 'app-merchant-info',
  templateUrl: './merchant-info.component.html',
  styleUrls: ['./merchant-info.component.css']
})
export class MerchantInfoComponent implements OnInit {
  userId: number;
  merchant: Merchant = {};
  loggedIn: boolean;
  merchantForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    phone: new FormControl('', [Validators.required, Validators.pattern
    ('^[0](\\+\\d{1,3}\\s?)?((\\(\\d{3}\\)\\s?)|(\\d{3})(\\s|-?))(\\d{3}(\\s|-?))(\\d{3})(\\s?(([E|e]xt[:|.|]?)|x|X)(\\s?\\d+))?')]),
    openTime: new FormControl(),
    closeTime: new FormControl(),
  });
  currentUserId: number;

  get nameControl() {
    return this.merchantForm.get('name');
  }

  get descriptionControl() {
    return this.merchantForm.get('description');
  }

  get addressControl() {
    return this.merchantForm.get('address');
  }

  get phoneControl() {
    return this.merchantForm.get('phone');
  }

  get openTimeControl() {
    return this.merchantForm.get('openTime');
  }

  get closeTimeControl() {
    return this.merchantForm.get('closeTime');
  }  constructor(private merchantService: MerchantService,
                 private userService: UserService,
                 private activateRoute: ActivatedRoute,
                 private authService: AuthService,
                 private router: Router,
                 private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.checkLoginAndGetMerchant();
  }
  getMerchant() {
    this.merchantService.viewMerchantInfo(this.userId).subscribe(
      (merchant) => {
        this.merchant = merchant;
        this.nameControl.setValue(this.merchant.name);
        this.descriptionControl.setValue(this.merchant.description);
        this.addressControl.setValue(this.merchant.address);
        this.phoneControl.setValue(this.merchant.phone);
        this.openTimeControl.setValue(this.merchant.openTime);
        this.closeTimeControl.setValue(this.merchant.closeTime);
      }
    );
  }

  checkLoginAndGetMerchant() {
    this.loggedIn = this.authService.isLoggedIn();
    this.userId = this.authService.getCurrentUserId();
    if (this.loggedIn) {
      this.getMerchant();
    }
  }

  editMerchant() {
    if (this.merchantForm.valid) {
      this.merchantService.updateMerchant(this.merchant.id, this.merchantForm.value).subscribe(() => {
        this.notificationService.showMessage('success', 'Cập nhật thành công!');
      }, error => {
        this.notificationService.showMessage('error', 'Cập nhật lỗi!');
      });
    } else {
      this.notificationService.showMessage('error', 'Cập nhật lỗi');
    }
  }
}

import { Component, OnInit } from '@angular/core';
import {Merchant} from '../../model/merchant';
import {MerchantService} from '../../service/merchant/merchant.service';
import {AuthService} from '../../service/auth/auth.service';

@Component({
  selector: 'app-merchant-banned',
  templateUrl: './merchant-banned.component.html',
  styleUrls: ['./merchant-banned.component.css']
})
export class MerchantBannedComponent implements OnInit {
  merchant: Merchant = {};
  currentUserId: number;
  constructor(private merchantService: MerchantService,
              private authService: AuthService) {
    this.currentUserId = this.authService.currentUserValue.id;
  }

  ngOnInit() {
    this.getMerchant();
  }
  getMerchant() {
    this.merchantService.getCurrentUserMerchant(this.currentUserId).subscribe(
      (merchant) => this.merchant = merchant
    )
  }
}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantBannedComponent } from './merchant-banned.component';

describe('MerchantBannedComponent', () => {
  let component: MerchantBannedComponent;
  let fixture: ComponentFixture<MerchantBannedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantBannedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantBannedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

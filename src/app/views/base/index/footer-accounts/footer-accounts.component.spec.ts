import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterAccountsComponent } from './footer-accounts.component';

describe('FooterAccountsComponent', () => {
  let component: FooterAccountsComponent;
  let fixture: ComponentFixture<FooterAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterAccountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

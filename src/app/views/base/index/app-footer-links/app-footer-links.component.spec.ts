import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFooterLinksComponent } from './app-footer-links.component';

describe('AppFooterLinksComponent', () => {
  let component: AppFooterLinksComponent;
  let fixture: ComponentFixture<AppFooterLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppFooterLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFooterLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

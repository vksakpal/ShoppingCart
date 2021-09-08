import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppfootercontactsComponent } from './appfootercontacts.component';

describe('AppfootercontactsComponent', () => {
  let component: AppfootercontactsComponent;
  let fixture: ComponentFixture<AppfootercontactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppfootercontactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppfootercontactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

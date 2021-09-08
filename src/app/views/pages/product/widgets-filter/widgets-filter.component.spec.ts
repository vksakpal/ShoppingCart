import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsFilterComponent } from './widgets-filter.component';

describe('WidgetsFilterComponent', () => {
  let component: WidgetsFilterComponent;
  let fixture: ComponentFixture<WidgetsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetsFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

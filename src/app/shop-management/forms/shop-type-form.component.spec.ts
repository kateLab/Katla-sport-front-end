import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopTypeFormComponent } from './shop-type-form.component';

describe('ShopTypeFormComponent', () => {
  let component: ShopTypeFormComponent;
  let fixture: ComponentFixture<ShopTypeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopTypeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

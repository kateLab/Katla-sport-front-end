import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopTypeListComponent } from './shop-type-list.component';

describe('ShopTypeListComponent', () => {
  let component: ShopTypeListComponent;
  let fixture: ComponentFixture<ShopTypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopTypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

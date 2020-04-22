import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildDepartmentListComponent } from './childDepartment-list.component';

describe('ChildDepartmentListComponent', () => {
  let component: ChildDepartmentListComponent;
  let fixture: ComponentFixture<ChildDepartmentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildDepartmentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildDepartmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

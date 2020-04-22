import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from 'app/main-page/main-page.component';
import { HiveFormComponent } from './hive-management/forms/hive-form.component';
import { HiveSectionFormComponent } from './hive-management/forms/hive-section-form.component';
import { HiveListComponent } from './hive-management/lists/hive-list.component';
import { HiveSectionListComponent } from './hive-management/lists/hive-section-list.component';
import { ProductCategoryFormComponent } from './product-management/forms/product-category-form.component';
import { ProductFormComponent } from './product-management/forms/product-form.component';
import { ProductCategoryListComponent } from './product-management/lists/product-category-list.component';
import { ProductCategoryProductListComponent } from './product-management/lists/product-category-product-list.component';
import { ProductListComponent } from './product-management/lists/product-list.component';
import { ShopTypeFormComponent } from './shop-management/forms/shop-type-form.component';
import { ShopTypeListComponent } from './shop-management/lists/shop-type-list.component';
import { ShopListComponent } from './shop-management/lists/shop-list.component';
import { ShopFormComponent } from './shop-management/forms/shop-form.component';
import { DepartmentListComponent } from './department-management/lists/department-list.component';
import { DepartmentFormComponent } from './department-management/forms/department-form.component';
import { EmployeeListComponent } from './employee-management/lists/employee-list.component';
import { EmployeeFormComponent } from './employee-management/forms/employee-form.component';
import { ChildDepartmentListComponent } from './department-management/lists/childDepartment-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainPageComponent },
  { path: 'categories', component: ProductCategoryListComponent },
  { path: 'category', component: ProductCategoryFormComponent },
  { path: 'category/:id', component: ProductCategoryFormComponent },
  { path: 'category/:id/products', component: ProductCategoryProductListComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'product/:id', component: ProductFormComponent },
  { path: 'category/:categoryId/product/:id', component: ProductFormComponent },
  { path: 'hives', component: HiveListComponent },
  { path: 'hive', component: HiveFormComponent },
  { path: 'hive/:id', component: HiveFormComponent },
  { path: 'hive/:id/sections', component: HiveSectionListComponent },
  { path: 'hive/:hiveId/section', component: HiveSectionFormComponent },
  { path: 'hive/:hiveId/section/:id', component: HiveSectionFormComponent },
  { path: 'types', component: ShopTypeListComponent },
  { path: 'shopType', component: ShopTypeFormComponent },
  { path: 'shopType/:id', component: ShopTypeFormComponent },
  { path: 'shopType/:id/shops', component: ShopListComponent },
  { path: 'shopType/:shopTypeId/shop', component: ShopFormComponent },
  { path: 'shopType/:shopTypeId/shop/:id', component: ShopFormComponent },
  { path: 'departments', component: DepartmentListComponent },
  { path: 'departments/:departmentId/children', component: ChildDepartmentListComponent },
  { path: 'department', component: DepartmentFormComponent },
  { path: 'department/:id', component: DepartmentFormComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'employee', component: EmployeeFormComponent },
  { path: 'employee/:id', component: EmployeeFormComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

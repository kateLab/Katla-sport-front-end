import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from 'app/app-routing.module';
import { AppComponent } from 'app/app.component';
import { HiveFormComponent } from 'app/hive-management/forms/hive-form.component';
import { HiveSectionFormComponent } from 'app/hive-management/forms/hive-section-form.component';
import { HiveListComponent } from 'app/hive-management/lists/hive-list.component';
import { HiveSectionListComponent } from 'app/hive-management/lists/hive-section-list.component';
import { HiveSectionService } from 'app/hive-management/services/hive-section.service';
import { HiveService } from 'app/hive-management/services/hive.service';
import { MainPageComponent } from 'app/main-page/main-page.component';
import { ProductCategoryFormComponent } from 'app/product-management/forms/product-category-form.component';
import { ProductFormComponent } from 'app/product-management/forms/product-form.component';
import { ProductCategoryListComponent } from 'app/product-management/lists/product-category-list.component';
import { ProductCategoryProductListComponent } from 'app/product-management/lists/product-category-product-list.component';
import { ProductListComponent } from 'app/product-management/lists/product-list.component';
import { ProductCategoryService } from 'app/product-management/services/product-category.service';
import { ProductService } from 'app/product-management/services/product.service';
import { ShopTypeFormComponent } from 'app/shop-management/forms/shop-type-form.component';
import { ShopTypeListComponent } from 'app/shop-management/lists/shop-type-list.component';
import { ShopTypeService } from 'app/shop-management/services/shop-type.service';
import { ShopListComponent } from 'app/shop-management/lists/shop-list.component';
import { ShopFormComponent } from 'app/shop-management/forms/shop-form.component';
import { ShopService } from 'app/shop-management/services/shop.service';
import { DepartmentListComponent } from 'app/department-management/lists/department-list.component';
import { DepartmentFormComponent } from 'app/department-management/forms/department-form.component';
import { DepartmentService } from 'app/department-management/services/department.service';
import { EmployeeFormComponent } from 'app/employee-management/forms/employee-form.component';
import { EmployeeService } from 'app/employee-management/services/employee.service';
import { EmployeeListComponent } from './employee-management/lists/employee-list.component';
import { ChildDepartmentListComponent } from './department-management/lists/childDepartment-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ProductCategoryListComponent,
    ProductCategoryFormComponent,
    ProductCategoryProductListComponent,
    ProductListComponent,
    ProductFormComponent,
    HiveListComponent,
    HiveFormComponent,
    HiveSectionFormComponent,
    HiveSectionListComponent,
    ShopTypeFormComponent,
    ShopTypeListComponent,
    ShopFormComponent,
    ShopListComponent,
    DepartmentFormComponent,
    DepartmentListComponent,
    ChildDepartmentListComponent,
    EmployeeListComponent,
    EmployeeFormComponent,
  ],
  imports: [
    // Angular imports
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpClientModule,
    // Application imports
    AppRoutingModule,
  ],
  providers: [
    // Angular providers
    HttpClient,
    // Application providers
    ProductService,
    ProductCategoryService,
    HiveService,
    HiveSectionService,
    ShopTypeService,
    ShopService,
    DepartmentService,
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

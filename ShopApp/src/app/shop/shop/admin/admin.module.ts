import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth.guard';
import { ProductListComponent } from './admin/products/product-list/product-list.component';
import { ProductFormComponent } from './admin/products/product-form/product-form.component';
import { CategoryListComponent } from './admin/categories/category-list/category-list.component';
import { CategoryFormComponent } from './admin/categories/category-form/category-form.component';
import { OrderListComponent } from './admin/orders/order-list/order-list.component';


@NgModule({
  declarations: [AdminComponent, AuthComponent, ProductListComponent, ProductFormComponent, CategoryListComponent, CategoryFormComponent, OrderListComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ],
  providers:[AuthGuard]
})
export class AdminModule { }

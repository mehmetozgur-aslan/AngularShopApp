import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { ProductFormComponent } from './admin/products/product-form/product-form.component';
import { ProductListComponent } from './admin/products/product-list/product-list.component';
import { CategoryFormComponent } from './admin/categories/category-form/category-form.component';
import { CategoryListComponent } from './admin/categories/category-list/category-list.component';
import { OrderListComponent } from './admin/orders/order-list/order-list.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  {
    path: 'main',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'products/:mode/:id', component: ProductFormComponent },
      { path: 'products/:mode/', component: ProductFormComponent },
      { path: 'products', component: ProductListComponent },
      { path: 'categories/:mode/:id', component: CategoryFormComponent },
      { path: 'categories/:mode/', component: CategoryFormComponent },
      { path: 'categories', component: CategoryListComponent },
      { path: 'orders', component: OrderListComponent },
    ],
  },
  { path: '**', redirectTo: 'auth' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

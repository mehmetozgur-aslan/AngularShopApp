import {NgModule} from "@angular/core";
import { ModelModule } from '../../model/model.module';
import { ShopComponent } from './shop.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryListComponent } from './category-list/category-list.component';


@NgModule({
  imports:[ModelModule,BrowserModule,FormsModule,RouterModule],//Model klasörü içindeki herşeye erişim
  providers:[],
  declarations: [ShopComponent, NavbarComponent, CartSummaryComponent, CartDetailComponent, CheckoutComponent, ProductListComponent, CategoryListComponent],
  exports:[ShopComponent, CartDetailComponent, CheckoutComponent,ProductListComponent,CategoryListComponent] // ShopComponent dışarı açılır.Component ve direktifler için geçerli,
  })


  export class ShopModule{}


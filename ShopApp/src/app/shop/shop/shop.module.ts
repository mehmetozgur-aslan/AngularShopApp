import {NgModule} from "@angular/core";
import { ModelModule } from '../../model/model.module';
import { ShopComponent } from './shop.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';


@NgModule({
  imports:[ModelModule,BrowserModule,FormsModule],//Model klasörü içindeki herşeye erişim
  providers:[],
  declarations: [ShopComponent, NavbarComponent, CartSummaryComponent, CartDetailComponent, CheckoutComponent],
  exports:[ShopComponent, CartDetailComponent, CheckoutComponent] // ShopComponent dışarı açılır.Component ve direktifler için geçerli,
  })


  export class ShopModule{}


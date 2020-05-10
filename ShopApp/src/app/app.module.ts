import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ShopModule } from './shop/shop/shop.module';
import { ShopComponent } from './shop/shop/shop.component';
import { CartDetailComponent } from './shop/shop/cart-detail/cart-detail.component';
import { CheckoutComponent } from './shop/shop/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ShopModule,
    RouterModule.forRoot([
      { path: 'shop', component: ShopComponent},
      { path: 'cart', component: CartDetailComponent},
      { path: 'checkout', component: CheckoutComponent},
      // { path: 'admin', loadChildren:"./shop/shop/admin/admin.module#AdminModule"},
      {path: 'admin', loadChildren: () => import('./shop/shop/admin/admin.module').then(m => m.AdminModule)},
      { path: '**', redirectTo: "/shop"}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

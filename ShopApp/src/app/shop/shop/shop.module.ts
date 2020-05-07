import {NgModule} from "@angular/core";
import { ModelModule } from '../../model/model.module';
import { ShopComponent } from './shop.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  imports:[ModelModule,BrowserModule,FormsModule],//Model klasörü içindeki herşeye erişim
  providers:[],
  declarations: [ShopComponent, NavbarComponent],
  exports:[ShopComponent] // ShopComponent dışarı açılır.
  })


  export class ShopModule{}


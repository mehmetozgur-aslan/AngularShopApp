import {NgModule} from "@angular/core";
import { ModelModule } from '../../model/model.module';
import { ShopComponent } from './shop.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports:[ModelModule,BrowserModule,FormsModule],//Model klasörü içindeki herşeye erişim
  providers:[],
  declarations: [ShopComponent],
  exports:[ShopComponent] // ShopComponent dışarı açılır.
  })


  export class ShopModule{}


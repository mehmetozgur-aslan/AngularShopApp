import {NgModule} from "@angular/core";
import { ModelModule } from '../model/model.module';


@NgModule({
  imports:[ModelModule],//Model klasörü içindeki herşeye erişim
  providers:[]
  })


  export class ShopModule{}

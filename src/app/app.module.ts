import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityPageComponent } from './city-page/city-page.component';
import { RestaurantPageComponent } from './restaurant-page/restaurant-page.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { MyMenuPageComponent } from './my-menu-page/my-menu-page.component';
import { NewMenuPageComponent } from './new-menu-page/new-menu-page.component';
import { EditMenuPageComponent } from './edit-menu-page/edit-menu-page.component';
import { PlaceOrderPageComponent } from './place-order-page/place-order-page.component';
import { ServicePageComponent } from './service-page/service-page.component';
import { MenuDetailPageComponent } from './menu-detail-page/menu-detail-page.component';
//import { AddDataFormComponent } from './add-data-form/add-data-form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { VeiwOrderPageComponent } from './veiw-order-page/veiw-order-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CityPageComponent,
    RestaurantPageComponent,
    MenuPageComponent,
    MyMenuPageComponent,
    NewMenuPageComponent,
    EditMenuPageComponent,
    PlaceOrderPageComponent,
    ServicePageComponent,
    MenuDetailPageComponent,
    //AddDataFormComponent,
    NavBarComponent,
    VeiwOrderPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

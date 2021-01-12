import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityPageComponent } from './city-page/city-page.component';
import { EditMenuPageComponent } from './edit-menu-page/edit-menu-page.component';
import { MenuDetailPageComponent } from './menu-detail-page/menu-detail-page.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { MyMenuPageComponent } from './my-menu-page/my-menu-page.component';
import { NewMenuPageComponent } from './new-menu-page/new-menu-page.component';
import { PlaceOrderPageComponent } from './place-order-page/place-order-page.component';
import { RestaurantPageComponent } from './restaurant-page/restaurant-page.component';
import { ServicePageComponent } from './service-page/service-page.component';

const routes: Routes = [{path:'', redirectTo:'/city', pathMatch: 'full'},
{path: 'city', component:CityPageComponent, pathMatch:'full'},
{path: 'city/:id', component:ServicePageComponent},
{path:'service/:id', component:RestaurantPageComponent},
{path: 'restaurant/:id', component:MenuPageComponent},
{path: 'menu/:id', component:MenuDetailPageComponent },
{path: 'place-order/:id', component:PlaceOrderPageComponent},
{path: 'my-menu', component:MyMenuPageComponent},
{path: 'new-menu', component:NewMenuPageComponent},
{path: 'edit-menu/:id', component:EditMenuPageComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {MdButtonModule, MdToolbarModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

import {OrderItemComponent} from './order-item/order-item.component';
import {ProductListComponent} from './product-list/product-list.component';
import {CartComponent} from './cart/cart.component';
import {LandingComponent} from './pages/landing/landing.component';


const AppRoutes: Routes = [
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: '**',
    component: LandingComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    OrderItemComponent,
    ProductListComponent,
    CartComponent,
    LandingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    MdButtonModule,
    MdToolbarModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

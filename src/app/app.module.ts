import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {MdButtonModule, MdToolbarModule} from '@angular/material';
import {FlexLayoutModule} from "@angular/flex-layout";

import {OrderItemComponent} from './order-item/order-item.component';

@NgModule({
    declarations: [
        AppComponent,
        OrderItemComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        FlexLayoutModule,
        MdButtonModule,
        MdToolbarModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

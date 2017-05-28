import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';

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
        MdButtonModule,
        MdCheckboxModule,

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

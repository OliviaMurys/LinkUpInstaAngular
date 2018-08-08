import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';

import {PhoneComponent} from './phone/phone.component';
import {HeaderComponent} from './header/header.component';
import {PostComponent} from './post/post.component';

@NgModule({
    declarations: [
        AppComponent,
        PhoneComponent,
        HeaderComponent,
        PostComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

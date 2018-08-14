import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {PhoneComponent} from './phone/phone.component';
import {HeaderComponent} from './header/header.component';
import {PostComponent} from './post/post.component';
import { FeedPageComponent } from './feed-page/feed-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { AddPostComponent } from './add-post/add-post.component';
import { FooterComponent } from './footer/footer.component';
import { SlickModule } from 'ngx-slick';

const routes=[
    {path: '', component: PhoneComponent},
    // {path: 'profile', component: ProfilePageComponent},
    // {path: 'newPost', component: PhoneComponent},
]
@NgModule({
    declarations: [
        AppComponent,
        PhoneComponent,
        HeaderComponent,
        PostComponent,
        FeedPageComponent,
        ProfilePageComponent,
        AddPostComponent,
        FooterComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(routes),
        FormsModule,
        SlickModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

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
const routes=[
    {path: '', component: FeedPageComponent},
    {path: 'profile', component: ProfilePageComponent},
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
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

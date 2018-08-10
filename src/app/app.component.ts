import {Component} from '@angular/core';
import {PostService} from './post/post.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [PostService]
})
export class AppComponent {}

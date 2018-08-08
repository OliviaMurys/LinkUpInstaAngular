import {Component} from '@angular/core';
import {PostService} from './post/post.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [PostService]
})
export class AppComponent {
    posts = [];

    constructor(private postService: PostService) {
    }

    ngOnInit() {
        this.postService.getPosts().subscribe(post => {
            console.warn(post);
        });
    }
}

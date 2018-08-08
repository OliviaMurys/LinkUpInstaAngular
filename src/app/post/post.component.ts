import {Component, Input} from '@angular/core';
import {PostService} from './post.service';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss'],
})
export interface Post {
    heroesUrl: string;
    textfile: string;
}
export class PostComponent {
    constructor(private postService: PostService) {
    }

  //  @Input() post;
    //
    // constructor() {
    // }
    post: Post;

    showPosts() {
        this.postService.getPosts();
            // .subscribe((data: Post) => this.post = {
            //     heroesUrl: data['heroesUrl'],
            //     textfile: data['textfile']
            // });
    }

    // showPosts() {
    //     this.postService.getPosts()
    //         .subscribe((data: Post) => this.post = {
    //             heroesUrl: data['heroesUrl'],
    //             textfile:  data['textfile']
    //         });
    // }


    public showAllComments(event: any): void {
        const parent = event.target.parentElement;
        const btn = event.target;
        btn.style.display = 'none';
        if (parent.classList.contains('comments')) {
            parent.classList.add('opened-comments');
        }
    }

    public opendrop() {
        document.getElementById('dropdown-content').style.display = 'flex';
    }

    public closedrop() {
        document.getElementById('dropdown-content').style.display = 'none';
    }

    // public deletepost() {
    //     document.getElementById('daleteModal').style.display = 'block';
    // }

    // public setLike() {
    //     const parent = event.target.parentElement;
    //
    //     document.getElementById('dropdown-content').style.display = 'flex';
    // }
}

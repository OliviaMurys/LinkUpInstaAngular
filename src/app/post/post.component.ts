import { Component, ViewChild, ElementRef } from '@angular/core';
import { PostService } from './post.service';
import { HttpResponse } from 'selenium-webdriver/http';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss'],
})

export class PostComponent {
    public activePostId: number;

    constructor(private postService: PostService) {
    }
    public showAllComments(event: any): void {
        const parent = event.target.parentElement;
        const btn = event.target;
        btn.style.display = 'none';
        if (parent.classList.contains('comments')) {
            parent.classList.add('opened-comments');
        }
    }

    public opendrop(postId: number) {
        this.activePostId = postId;
    }

    public closedrop() {
        this.activePostId = null;
    }

    public deletePost(id) {
        this.postService.deletePost(id).subscribe(res => {});
    }

    public setLike(id, like) {
        this.postService.setLike(id, like).subscribe(res => {
            console.log('like added');
        });
    }
    // getTotalScroll() {
    //     let ElemScrollTop = this.contentEl.nativeElement.scrollTop.subscribe();
    //     console.warn(ElemScrollTop);
    //   }

}


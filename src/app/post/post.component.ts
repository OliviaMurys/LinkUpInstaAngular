import { Component} from '@angular/core';
import { PostService } from './post.service';

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
        this.postService.deletePost(id).subscribe(res => { });
    }

    public setLike(id, like) {
        this.postService.setLike(id, like).subscribe(res => {
            console.log('like added');
        });
    }
    public addPost() {
       // let filess = this.AddPostComponent
        // this.postService.addPost(date, postFile, name, avatar).subscribe(post =>{
        //     this.postService.posts.push(post);
        //     console.warn('dodano')
        // })
        //let file: any = btoa((<HTMLInputElement>event.target).files[0]);
      //  let file = (<HTMLInputElement>event.target).files[0];
      //  console.warn(file)
      //  let normalizeFile = btoa(file.toString);
    }
}


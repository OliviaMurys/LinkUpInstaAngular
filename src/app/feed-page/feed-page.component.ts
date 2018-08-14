import { Component, OnInit, ViewChild, ElementRef,HostListener } from '@angular/core';
import { PostService } from '../post/post.service';
import{RouteService} from  '../shared/services/route.service'
@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.scss'],
  providers: [PostService]
})
export class FeedPageComponent implements OnInit {
  @HostListener('window:scroll', [])
  @ViewChild('phoneContent') contentEl: ElementRef;
  constructor(private postService: PostService) { }
  ngOnInit() {
  }
  getElHeight() {
    let elemHeight = this.contentEl.nativeElement.scrollHeight;
    console.warn(elemHeight);
  }
  onScroll() {
    let ElemScrollTop = this.contentEl.nativeElement.scrollTop.subscribe();
    console.warn(ElemScrollTop);
  }
  ngAfterViewInit() {
    this.postService.getPosts().then(posts => {
      setTimeout(() => {
        this.getElHeight();
      });
    }, err => console.error(err));
  }
}


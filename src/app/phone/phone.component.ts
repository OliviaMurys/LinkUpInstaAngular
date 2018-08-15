import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { RouteService } from '../shared/services/route.service'
import { PostService } from '../post/post.service';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss'],
  providers: [PostService]
})
export class PhoneComponent {
  @HostListener('window:scroll', [])
  @ViewChild('phoneContent') contentEl: ElementRef;

  constructor(public service: RouteService, public postService: PostService) { }
  getElHeight() {
    let elemHeight = this.contentEl.nativeElement.scrollHeight;
  }
  onScroll() {
    let ElemScrollTop = this.contentEl.nativeElement.scrollTop.subscribe();
  }
  ngAfterViewInit() {
    this.postService.getPosts().then(posts => {
      setTimeout(() => {
        this.getElHeight();
      });
    }, err => console.error(err));
  }
}

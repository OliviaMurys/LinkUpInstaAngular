import {Component} from '@angular/core';
import { PostService } from '../post/post.service';
import { AddPostComponent } from '../add-post/add-post.component';
import { FeedPageComponent } from '../feed-page/feed-page.component';
import { Router } from '../../../node_modules/@angular/router';
import{RouteService} from  '../shared/services/route.service'

@Component({
    selector: 'app-phone',
    templateUrl: './phone.component.html',
    styleUrls: ['./phone.component.scss'],
})
export  class PhoneComponent {
    constructor(public service: RouteService) { }
}

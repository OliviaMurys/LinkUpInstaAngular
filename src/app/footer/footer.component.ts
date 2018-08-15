import { Component, OnInit } from '@angular/core';
import{RouteService} from  '../shared/services/route.service'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  constructor(public service: RouteService) { }
  ngOnInit() {
  }
  feedVisible(){
    this.service.feedVisible = true;
    this.service.profileVisible = false
    this.service.addVisible = false
  }
  addVisible(){
    this.service.feedVisible = false;
    this.service.profileVisible = false
    this.service.addVisible = true
  }
  profileVisible(){
    this.service.feedVisible = false;
    this.service.profileVisible = true
    this.service.addVisible = false
  }
}

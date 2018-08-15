import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import{RouteService} from  '../shared/services/route.service'

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  constructor(public service: RouteService) { }
  @ViewChild('uploadedImg') imgEl: ElementRef;
  slides = [];
  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "autoplay": true,
    "autoplaySpeed": 2000,
  };
  ngOnInit() {
  }
  public onFileUpload(event) {
    let files = event.target.files;
    let base64 = '';
    for (let i = 0, file; file = files[i]; i++) {
      const reader = new FileReader();
      reader.onloadend = () => {
        base64 = reader.result;
        this.slides.push(base64);
      }
      if (file) {
        reader.readAsDataURL(file);
      }
    }
  }
}

import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { RouteService } from "../shared/services/route.service";
import { PostService } from "../post/post.service";
@Component({
  selector: "app-add-post",
  templateUrl: "./add-post.component.html",
  styleUrls: ["./add-post.component.scss"]
})
export class AddPostComponent implements OnInit {
  constructor(public service: RouteService, public postService: PostService) {}
  @ViewChild("uploadedImg")
  imgEl: ElementRef;
  ngOnInit() {}
  public onFileUpload(event) {
    let files = event.target.files;
    this.asyncFunc(files).then(images => {
      this.postService.posts.unshift({
        imageUrls: images,
        id: "8",
        createdAt: "2018-08-10T11:31:12.280Z",
        userName: "Johnnie Anderson",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/theonlyzeke/128.jpg",
        likes: 234
      });
    });
  }

  public asyncFunc(files): Promise<any> {
    return new Promise((resolve, reject) => {
      let base64 = "";
      let imgArr = [];
      for (let i = 0, file; (file = files[i]); i++) {
        const reader = new FileReader();
        reader.onloadend = () => {
          imgArr.push(reader.result);
          if (i == files.length - 1) resolve(imgArr);
        };
        if (file) {
          reader.readAsDataURL(file);
        }
      }
      err => {
        reject(err);
      };
    });
  }
}

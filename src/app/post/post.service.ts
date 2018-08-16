import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable()
export class PostService {
  public slides: any[] = [];
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };
  postUrl = "http://5b27755162e42b0014915662.mockapi.io/api/v1/posts";
  public posts: any[] = [];

  constructor(private http: HttpClient) {}

  getPosts(): Promise<any> {
    return new Promise((resolve, reject) => {
      fetch(this.postUrl, {
        method: "GET"
      }).then(
        res => {
          res.json().then(res => {
            this.posts = res;
            this.getCoupleOfPosts();
            resolve();
          });
        },
        err => {
          reject(err);
        }
      );
    });
  }
  getCoupleOfPosts(): void {
    let chunk = this.posts.slice(0, 5);
    console.warn(chunk);
  }

  deletePost(id) {
    return this.http.delete(`${this.postUrl}/${id}`);
  }
  setLike(id, like) {
    const obj = {
      like: like + 1
    };
    like += 1;
    return this.http.post(`${this.postUrl}/${id}/like`, obj);
  }
}

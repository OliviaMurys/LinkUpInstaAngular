import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpResponse } from 'selenium-webdriver/http';
import { Observable } from '../../../node_modules/rxjs';
import { resolve } from 'url';

@Injectable()
export class PostService {
    [x: string]: any;
    constructor(private http: HttpClient) {
    }
    postUrl = 'http://5b27755162e42b0014915662.mockapi.io/api/v1/posts';
    public posts: any[] = [];
    getPosts(): Promise<any> {
        return new Promise((resolve, reject) => {
            fetch(this.postUrl, {
                method: 'GET'
            }).then(res => {
                res.json().then(res => {
                    this.posts = res;
                    this.getCoupleOfPosts();
                    resolve();
                })
            }, err => {
                reject(err);
            });
        });
    };
    getCoupleOfPosts(): void {
        let chunk = this.posts.slice(0, 5);
        console.warn(chunk);
    }

    deletePost(id) {
        return this.http.delete(`${this.postUrl}/${id}`);
    }
    setLike(id, like) {
        const obj = {
            like: like+1,
             };
        like+=1;
        // console.warn(like)
        return this.http.post(`${this.postUrl}/${id}/like`, obj);
    }

}


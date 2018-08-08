import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {HttpResponse} from 'selenium-webdriver/http';

@Injectable()
export class PostService {
    constructor(private  http: HttpClient) {
    }

    postUrl = 'http://5b27755162e42b0014915662.mockapi.io/api/v1/posts';

    getPosts() {
        this.http.get(this.postUrl).subscribe(res => console.log(res()));       // return this.http.get(this.postUrl);
    }

    // getPostsResponse(): Observable<HttpResponse<Post>> {
    //     return this.http.get<Post>(
    //         this.postUrl, {observe: 'response'});
    // }

    posts = [
        {
            postId: 1,
            userName: 'Olya Murys',
            userLocation: 'Turkey',
            numOfLooks: 265,
            postTittle: 'jsjlf fkj',
            userImage: 'https://t-ec.bstatic.com/images/hotel/max1024x768/999/99948465.jpg',
            postImage: 'https://i.pinimg.com/originals/da/3a/7a/da3a7a2dd94d7a64092acebceeb2df37.jpg'
        },
        {
            postId: 2,
            userName: 'Olivia Blenk',
            userLocation: 'Ukraine',
            numOfLooks: 10,
            postTittle: 'travel',
            userImage: 'https://t-ec.bstatic.com/images/hotel/max1024x768/999/99948465.jpg',
            postImage: 'https://images.adsttc.com/media/images/5ac1/df29/f197/ccce/9f00/0565/newsletter/feature_image.jpg?1522655007'
        },
        {
            postId: 3,
            userName: 'Antony',
            userLocation: 'Lviv',
            numOfLooks: 23,
            postTittle: 'workshop day',
            userImage: 'https://q-xx.bstatic.com/images/hotel/max500/999/99948340.jpg',
            postImage: 'https://www.decopasion.com/Imagenes/cocina-tipo-loft.jpg'
        },
        {
            postId: 4,
            userName: 'loft interior',
            userLocation: 'USA',
            numOfLooks: 265342,
            postTittle: 'New house',
            userImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTfKV8Yaoh2BHBfyY5RL1kB942FKrO-wilAGeKrosDBA1TzlYH',
            postImage: 'http://ekladata.com/K5JF9W4Dq0B8zmILc4q505ldNho.jpg'
        },
        {
            postId: 5,
            userName: 'salacka',
            userLocation: 'Kyiv',
            numOfLooks: 26435,
            postTittle: 'Welcome to my insta',
            userImage: 'https://cdn.homedit.com/wp-content/uploads/2014/06/kiev-masculine-loft-black-floor-living-room1.jpg',
            postImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTfKV8Yaoh2BHBfyY5RL1kB942FKrO-wilAGeKrosDBA1TzlYH'
        },
    ];
}

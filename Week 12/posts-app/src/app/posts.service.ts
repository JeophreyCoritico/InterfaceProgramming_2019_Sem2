import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post';



@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Post[] = [];
  constructor(private http: HttpClient) {}

  getPosts() 
  {
    this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts").subscribe((data: Post[]) => {
      this.posts = data;
    })
  }

  refreshPage(){
    window.location.reload();
  }

}

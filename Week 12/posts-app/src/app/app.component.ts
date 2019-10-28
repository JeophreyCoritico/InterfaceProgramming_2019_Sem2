import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'posts-app';
  hide: boolean;

  constructor(public postsService: PostsService){}

  ngOnInit(){
    this.postsService.getPosts();
  }

  onClickRefreshPage(){
    this.postsService.refreshPage();
  }
}

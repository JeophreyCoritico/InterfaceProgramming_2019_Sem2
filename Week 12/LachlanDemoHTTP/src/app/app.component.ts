import { Component, OnInit } from '@angular/core';
import { AlbumsService } from './albums.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'LachlanDemoHTTP';

  constructor(public albumsService: AlbumsService){}

  ngOnInit(){
    this.albumsService.fetchAlbums();
  }  
}

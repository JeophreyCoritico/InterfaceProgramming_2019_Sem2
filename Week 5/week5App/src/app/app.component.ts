import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'week5App';

  item = "";

  onKeyUp(input: string){
    this.item = input;
  }
  ngOnInit() {

  }
}

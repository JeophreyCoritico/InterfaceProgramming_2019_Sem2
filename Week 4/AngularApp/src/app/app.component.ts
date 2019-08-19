import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'AngularApp';

  name = 'Jeff';
  name2 = 'yeeeeeeeeeeeeet';

  onKeyUp(input: string){
   this.name = input; 
  }

  ngOnInit() {

  }
}

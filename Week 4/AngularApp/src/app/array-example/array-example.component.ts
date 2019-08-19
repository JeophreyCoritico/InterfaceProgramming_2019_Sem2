import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-example',
  templateUrl: './array-example.component.html',
  styleUrls: ['./array-example.component.css']
})
export class ArrayExampleComponent implements OnInit {

planets: string[] = ["Earth", "Pluto", "Mars"]

  constructor() { }

  ngOnInit() {
  }

  onButtonClick() {
    this.planets.push("Hello World");
  }

}

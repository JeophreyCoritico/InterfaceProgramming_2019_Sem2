import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent implements OnInit {

names: string[] = ["Jeophrey", "Jeff", "Jerome"]

  constructor() { }

  ngOnInit() {
  }

  onButtonClick() {
    this.names.push(name);
  }

}

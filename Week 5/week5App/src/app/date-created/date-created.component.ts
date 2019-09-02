import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-created',
  templateUrl: './date-created.component.html',
  styleUrls: ['./date-created.component.css']
})
export class DateCreatedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    CurrentDate = new Date();

}

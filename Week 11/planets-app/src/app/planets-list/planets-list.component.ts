import { Component, OnInit } from '@angular/core';
import { planet } from '../planets';
import { PlanetsServiceService } from '../planets-service.service';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.css']
})
export class PlanetsListComponent implements OnInit {

  service: PlanetsServiceService

  constructor(service: PlanetsServiceService) { 
    this.service = service;
  }
  ngOnInit() {
  }

}

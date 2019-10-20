import { Component, OnInit } from '@angular/core';
import { PlanetsServiceService } from '../planets-service.service';
import { planet } from './planets';

@Component({
  selector: 'app-planets-detail',
  templateUrl: './planets-detail.component.html',
  styleUrls: ['./planets-detail.component.css']
})
export class PlanetsDetailComponent implements OnInit {

  constructor(private planetSERVICE: PlanetsServiceService) { }

  addPlanet(): void {
    this.planet = this.planetSERVICE.addPlanet();
  }

  ngOnInit() {
  }

}

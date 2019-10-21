import { Component, OnInit } from '@angular/core';
import { PlanetsServiceService } from '../planets-service.service';
import { planet } from '../planets';

@Component({
  selector: 'app-planets-create',
  templateUrl: './planets-create.component.html',
  styleUrls: ['./planets-create.component.css']
})
export class PlanetsCreateComponent implements OnInit {
PlanetName: string;
PlanetMoons: string;
PlanetDistance: string;

  constructor(private planetSERVICE: PlanetsServiceService) {}

  ngOnInit() {
  }

  onAddPlanetClick(){
this.planetSERVICE.addPlanet(new planet(this.PlanetName, parseInt(this.PlanetMoons), parseInt(this.PlanetDistance)));
  }

  onSortPlanetClick(){
    this.planetSERVICE.sortPlanets();
  }

}

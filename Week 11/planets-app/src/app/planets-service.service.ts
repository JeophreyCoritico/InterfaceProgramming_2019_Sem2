import { Injectable } from '@angular/core';
import { planet } from './planets';


@Injectable({
  providedIn: 'root'
})
export class PlanetsServiceService {
  PLANETS: planet[] = [];
  
  constructor() { }

  addPlanet(planet: planet) {
    this.PLANETS.push(planet);
  }

  sortPlanets() {
    console.log(this.PLANETS)
    this.PLANETS = this.PLANETS.sort(function (a, b) {
      var x = a.distanceFromSun;
      var y = b.distanceFromSun;
      return x < y ? -1 : x > y ? 1 : 0;
    });
  }

  DeletePlanet(Planet: planet){
    const index: number = this.PLANETS.indexOf(Planet);
    if (index !== -1) {
      this.PLANETS.splice(index, 1)
    }
  }
}

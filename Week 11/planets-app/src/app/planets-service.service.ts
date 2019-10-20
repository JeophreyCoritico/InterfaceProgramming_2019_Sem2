import { Injectable } from '@angular/core';
import { planet } from './planets';
import { PLANETS } from './mock-planets';

@Injectable({
  providedIn: 'root'
})
export class PlanetsServiceService {

  constructor() { }

  addPlanet(): planet[] {
    return PLANETS;
  }
}

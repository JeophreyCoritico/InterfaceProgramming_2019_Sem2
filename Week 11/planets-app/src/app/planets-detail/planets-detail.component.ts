import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { planet } from '../planets';
import { PLANETS } from '../mock-planets';

@Component({
  selector: 'app-planets-detail',
  templateUrl: './planets-detail.component.html',
  styleUrls: ['./planets-detail.component.css']
})
export class PlanetsDetailComponent implements OnInit {

@Input() Planet: planet;

@Output() onPlanetDelete : EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  deletePlanet(){
    this.onPlanetDelete.emit();
  }
  


}

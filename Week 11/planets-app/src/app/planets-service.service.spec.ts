import { TestBed } from '@angular/core/testing';

import { PlanetsServiceService } from './planets-service.service';

describe('PlanetsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlanetsServiceService = TestBed.get(PlanetsServiceService);
    expect(service).toBeTruthy();
  });
});

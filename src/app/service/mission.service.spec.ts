import { TestBed, inject } from '@angular/core/testing';

import { missionService } from './mission.service';

describe('Service\missionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [missionService]
    });
  });

  it('should be created', inject([missionService], (service: missionService) => {
    expect(service).toBeTruthy();
  }));
});

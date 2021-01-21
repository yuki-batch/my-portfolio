import {TestBed, inject} from '@angular/core/testing';

import {ProgramingExperienceService} from './programing-experience.service';

describe('ProgramingExperienceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProgramingExperienceService]
    });
  });

  it('should be created', inject([ProgramingExperienceService], (service: ProgramingExperienceService) => {
    expect(service).toBeTruthy();
  }));
});

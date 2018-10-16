import { TestBed } from '@angular/core/testing';

import { DataProfileService } from './data-profile.service';

describe('DataProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataProfileService = TestBed.get(DataProfileService);
    expect(service).toBeTruthy();
  });
});

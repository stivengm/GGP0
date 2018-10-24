import { TestBed } from '@angular/core/testing';

import { NotFundService } from './not-fund.service';

describe('NotFundService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotFundService = TestBed.get(NotFundService);
    expect(service).toBeTruthy();
  });
});

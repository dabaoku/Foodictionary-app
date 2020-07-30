import { TestBed } from '@angular/core/testing';

import { FoodFilterUrlService } from './food-filter-url.service';

describe('FoodFilterUrlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FoodFilterUrlService = TestBed.get(FoodFilterUrlService);
    expect(service).toBeTruthy();
  });
});

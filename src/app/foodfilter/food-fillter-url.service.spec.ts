import { TestBed } from '@angular/core/testing';

import { FoodFillterUrlService } from './food-fillter-url.service';

describe('FoodFillterUrlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FoodFillterUrlService = TestBed.get(FoodFillterUrlService);
    expect(service).toBeTruthy();
  });
});

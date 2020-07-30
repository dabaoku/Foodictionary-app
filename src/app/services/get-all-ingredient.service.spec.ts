import { TestBed } from '@angular/core/testing';

import { GetAllIngredientService } from './get-all-ingredient.service';

describe('GetAllIngredientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetAllIngredientService = TestBed.get(GetAllIngredientService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { GetAllRecipeService } from './get-all-recipe.service';

describe('GetAllRecipeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetAllRecipeService = TestBed.get(GetAllRecipeService);
    expect(service).toBeTruthy();
  });
});

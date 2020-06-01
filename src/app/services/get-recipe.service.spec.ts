import { TestBed } from '@angular/core/testing';

import { GetRecipeService } from './get-recipe.service';

describe('GetRecipeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetRecipeService = TestBed.get(GetRecipeService);
    expect(service).toBeTruthy();
  });
});

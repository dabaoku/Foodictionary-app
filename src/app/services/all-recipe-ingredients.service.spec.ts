import { TestBed } from '@angular/core/testing';

import { AllRecipeIngredientsService } from './all-recipe-ingredients.service';

describe('AllRecipeIngredientsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllRecipeIngredientsService = TestBed.get(AllRecipeIngredientsService);
    expect(service).toBeTruthy();
  });
});

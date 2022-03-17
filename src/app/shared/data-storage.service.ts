import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(
    private httpService: HttpClient,
    private recipeService: RecipeService
  ) {}
  storeRecipes() {
    const recipies = this.recipeService.getRecipes();
    this.httpService
      .put(
        'https://angular-recipe-app-2eedd-default-rtdb.firebaseio.com/recipes.json',
        recipies
      )
      .subscribe((res) => console.log(res));
  }
  fetchRecipes() {
    this.httpService
      .get(
        'https://angular-recipe-app-2eedd-default-rtdb.firebaseio.com/recipes.json'
      )
      .subscribe((res) => console.log(res));
  }
}

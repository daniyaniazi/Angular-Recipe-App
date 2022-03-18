import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { map, tap } from 'rxjs';
import { Recipe } from '../recipes/recipe.model';
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
    return this.httpService
      .get<Recipe[]>(
        'https://angular-recipe-app-2eedd-default-rtdb.firebaseio.com/recipes.json'
      )
      .pipe(
        map((recipes) => {
          return recipes.map((recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        }),
        tap((recipes) => {
          this.recipeService.setRecipes(recipes);
        })
      );
  }
}

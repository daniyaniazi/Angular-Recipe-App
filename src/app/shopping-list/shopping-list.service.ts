import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class shoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('milk', 1),
  ];
  ingredentsChanged = new EventEmitter<Ingredient[]>();
  getIngredients() {
    return this.ingredients.slice();
  }
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredentsChanged.emit(this.ingredients);
  }
  addIngredients(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients) {
    //   this.ingredients.push(ingredient);
    // }

    this.ingredients.push(...ingredients);
    this.ingredentsChanged.emit(this.ingredients);
  }
}

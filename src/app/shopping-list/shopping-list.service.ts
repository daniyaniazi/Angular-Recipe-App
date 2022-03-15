import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

export class shoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('milk', 1),
  ];
  ingredentsChanged = new Subject<Ingredient[]>();
  getIngredients() {
    return this.ingredients.slice();
  }
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredentsChanged.next(this.ingredients);
  }
  addIngredients(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients) {
    //   this.ingredients.push(ingredient);
    // }

    this.ingredients.push(...ingredients);
    this.ingredentsChanged.next(this.ingredients);
  }
}

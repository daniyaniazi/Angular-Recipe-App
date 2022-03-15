import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

export class shoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('milk', 1),
  ];
  startedEditing = new Subject<number>();
  ingredentsChanged = new Subject<Ingredient[]>();
  getIngredients() {
    return this.ingredients.slice();
  }
  getIngredient(index: number) {
    return this.ingredients[index];
  }
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredentsChanged.next(this.ingredients.slice());
  }
  addIngredients(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients) {
    //   this.ingredients.push(ingredient);
    // }

    this.ingredients.push(...ingredients);
    this.ingredentsChanged.next(this.ingredients.slice());
  }
  updateIngredient(index: number, newIng: Ingredient) {
    this.ingredients[index] = newIng;
    this.ingredentsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredentsChanged.next(this.ingredients.slice());
  }
}

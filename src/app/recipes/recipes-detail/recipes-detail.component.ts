import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css'],
})
export class RecipesDetailComponent implements OnInit {
  @Input() recipe: Recipe | any;
  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {}
  addToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe?.ingredients);
  }
}

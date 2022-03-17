import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit, OnDestroy {
  recipies: Recipe[] = [];
  recipeSubscription!: Subscription;
  constructor(
    private RecipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.recipies = this.RecipeService.getRecipes();
    this.recipeSubscription = this.RecipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipies = recipes;
      }
    );
  }
  onNew() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
  ngOnDestroy(): void {
    this.recipeSubscription.unsubscribe();
  }
}

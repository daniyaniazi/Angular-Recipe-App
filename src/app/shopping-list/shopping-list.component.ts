import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { shoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  private igChange!: Subscription;
  constructor(private slService: shoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this.igChange = this.slService.ingredentsChanged.subscribe(
      (ingredients: Ingredient[]) => (this.ingredients = ingredients)
    );
  }
  ngOnDestroy(): void {
    this.igChange.unsubscribe();
  }
}

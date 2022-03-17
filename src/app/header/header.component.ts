import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private dataStorgeService: DataStorageService) {}
  onSave() {
    this.dataStorgeService.storeRecipes();
  }
  onRecipe() {
    this.dataStorgeService.fetchRecipes();
  }
}

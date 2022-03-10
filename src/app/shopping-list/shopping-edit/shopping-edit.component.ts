import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  constructor() {}
  @ViewChild('nameInput') nameInputRef: ElementRef | any;
  @ViewChild('amountInput') amountInputRef: ElementRef | any;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  ngOnInit(): void {}
  onAddItem() {
    const newIng = new Ingredient(
      this.nameInputRef.nativeElement.value,
      this.amountInputRef.nativeElement.value
    );
    this.ingredientAdded.emit(newIng);
  }
}

import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('tomato', 2, 'kg'),
    new Ingredient('cucumber', 1, 'kg'),
    new Ingredient('pepper', 1, 'kg'),
    new Ingredient('onion', 1, 'kg'),
    new Ingredient('garlic', 1, 'kg'),

  ];

}

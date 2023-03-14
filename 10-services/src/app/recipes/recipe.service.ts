import { EventEmitter, Injectable } from "@angular/core";

import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://www.gatewaytavern.com.au/wp-content/uploads/2021/10/what-is-schnitzel.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20),
        new Ingredient('Salad', 1)
      ]),
      
    new Recipe('A Questionable Burger',
      'What else you need to say?',
      'https://claudia.abril.com.br/wp-content/uploads/2020/02/receita-acaraje-02.jpg?quality=85&strip=info',
      [
        new Ingredient('Black-Eyed Peas', 2),
        new Ingredient('Onion', 1),
        new Ingredient('Palm Oil', 500),
        new Ingredient('Dende (Red Palm) Oil', 500),
        new Ingredient('Shrimp', 10),
        new Ingredient('Okra', 1),
        new Ingredient('Bell Pepper', 100000000),
        new Ingredient('Garlic Gloves', 2),
        new Ingredient('Ginger', 1),
        new Ingredient('Cilantro', 1),
        new Ingredient('Salt', 1),
        new Ingredient('Pepper', 1),
        new Ingredient('Lime Wedges', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

   getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  } 
}


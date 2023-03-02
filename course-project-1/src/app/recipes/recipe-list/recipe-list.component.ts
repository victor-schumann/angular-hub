import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  
  recipes: Recipe[] = [
    new Recipe("Test Recipe", "This is a simple test.", "https://scholarlykitchen.sspnet.org/wp-content/uploads/2020/04/iStock-1161454487-1024x633.jpg"),
    new Recipe("Lasagna", "This is a simple Lasagna recipe.", "https://img.freepik.com/free-vector/hand-drawn-italian-cuisine-illustration_23-2149323583.jpg")
  ];

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);

  }

}

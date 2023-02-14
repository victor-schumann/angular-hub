import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe("Lasagna", "This is a simple Lasagna recipe from my grandmother.", "https://img.freepik.com/free-vector/hand-drawn-italian-cuisine-illustration_23-2149323583.jpg"),
    new Recipe("Lasagna", "This is a simple Lasagna recipe from my grandmother.", "https://img.freepik.com/free-vector/hand-drawn-italian-cuisine-illustration_23-2149323583.jpg")
  ];

}

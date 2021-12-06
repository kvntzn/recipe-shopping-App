import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";

// @Injectable({ providedIn: "root" })
export class RecipeService {
  constructor() {}
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "test reciper",
      "this is a test",
      "https://static.onecms.io/wp-content/uploads/sites/43/2020/07/22/8000900-2000.jpg"
    ),
    new Recipe(
      "test reciper 2",
      "this is a test",
      "https://static.onecms.io/wp-content/uploads/sites/43/2020/07/22/8000900-2000.jpg"
    ),
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}

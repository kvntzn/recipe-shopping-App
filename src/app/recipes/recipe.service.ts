import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

// @Injectable({ providedIn: "root" })
export class RecipeService {
  constructor() {}
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "test reciper",
      "this is a test",
      "https://static.onecms.io/wp-content/uploads/sites/43/2020/07/22/8000900-2000.jpg",
      [new Ingredient("Meat", 1), new Ingredient("French Fries", 1)]
    ),
    new Recipe(
      "test reciper 2",
      "this is a test",
      "https://static.onecms.io/wp-content/uploads/sites/43/2020/07/22/8000900-2000.jpg",
      [new Ingredient("Meat", 1), new Ingredient("French Fries", 1)]
    ),
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}

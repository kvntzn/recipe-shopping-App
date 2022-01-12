import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";

@Injectable({ providedIn: "root" })
export class DataStorageService {
  private RECIPE_URL =
    "https://ng-course-recipe-book-6c44e-default-rtdb.firebaseio.com/recipes.json";

  constructor(
    private http: HttpClient,
    private recipesService: RecipeService
  ) {}

  storeRecipes() {
    const recipes = this.recipesService.getRecipes();
    this.http.put(this.RECIPE_URL, recipes).subscribe((response) => {
      console.log(response);
    });
  }

  fetchRecipes() {
    this.http.get<Recipe[]>(this.RECIPE_URL).subscribe((recipes) => {
      console.log(recipes);
      this.recipesService.setRecipes(recipes);
    });
    // this.recipesService.
  }
}

import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

@Injectable({ providedIn: "root" })
export class ShoppingListService {
  constructor() {}

  // ingredientsChange = new EventEmitter<Ingredient[]>();
  ingredientsChange = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient("apples", 5),
    new Ingredient("tomato", 5),
  ];

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChange.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChange.next(this.ingredients.slice());
  }
}

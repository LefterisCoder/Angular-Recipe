import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
@Injectable()
export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Schnitzel',
      'Schnitzel from another world',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG/1920px-Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG',
      [new Ingredient('Meat',20),
                new Ingredient('French Fries',20),
      ]),
    new Recipe('Burger',
      'The best Burger In Town.',
      'https://www.seriouseats.com/thmb/Po6tpVxaADjvMgyUo7c7OaxlATs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2014__09__20140918-jamie-olivers-comfort-food-insanity-burger-david-loftus-f7d9042bdc2a468fbbd50b10d467dafd.jpg',
      [ new Ingredient('Meat',10),
                new Ingredient('Bacon',2)])
  ];
constructor(private slService : ShoppingListService) {
}
  getRecipes(){
    return this.recipes.slice();
  }
  getRecipe(index: number){
  return this.recipes[index];
  }
  addIngredientsToShoppingList(ingredients:Ingredient[]){
  this.slService.addIngredients(ingredients);
  }

}

import { Ingredients } from '../Shared/ingredient.model';
import { Subject } from 'rxjs';


export class ShoppingListService{


    ingredientChanged= new Subject<Ingredients[]>();
    startedEditing = new Subject<number>();
    private ingredients:Ingredients[]=[];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(ing:Ingredients){

        this.ingredients.push(ing);
        this.ingredientChanged.next(this.ingredients.slice());
    }



    addIngredientsToShoppingList(ing:Ingredients[]){

        this.ingredients.push(...ing);
        this.ingredientChanged.next(this.ingredients.slice());

    }

    upgradeIngredient(index:number, ing:Ingredients){

        this.ingredients[index]=ing;
        this.ingredientChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index:number){
        this.ingredients.splice(index,1);
        this.ingredientChanged.next(this.ingredients.slice());

    }

    getIngredientsByIndex(index:number){
        return this.ingredients[index];
    }
    
}
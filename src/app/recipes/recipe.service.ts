import { Recipe } from './recipies.model';
import { Ingredients } from '../Shared/ingredient.model';



export class RecipeService{

    private recipes:Recipe[]=[];
   

    constructor(){
        this.recipes.push(new Recipe('Garlic Chicken',
        'chicken and asparagus skillet recipe',
        'https://www.eatwell101.com/wp-content/uploads/2019/04/chicken-and-asparagus-skillet-recipe-2.jpg',
        [new Ingredients('Chicken','100'),new Ingredients('Garlic','50')]));
    
        this.recipes.push(new Recipe('mongolian-chicken',
        'mongolian-chicken recipe',
        'https://www.dinneratthezoo.com/wp-content/uploads/2018/08/mongolian-chicken-4.jpg',
        [new Ingredients('Chicken','100'),new Ingredients('Onion','80')]));

      
    }

    getRecipies(){
        return this.recipes.slice();
    }

    getRecipeById(i:number){
        return this.recipes.slice()[i];
    }


}
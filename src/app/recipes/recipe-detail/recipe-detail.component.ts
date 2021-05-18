import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipies.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  recipetoShow:Recipe;
  id:number;

  constructor(
    private recipeService:RecipeService,
    private slService:ShoppingListService,
    private route:ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.route.params.subscribe(
      (params:Params) =>{

        this.id=+params['id'];
        this.recipetoShow=this.recipeService.getRecipeById(this.id);
      }
    );
  }

  addToShopingList(){

    this.slService.addIngredientsToShoppingList(this.recipetoShow.ingredients);
  }

  onEdit(){

    this.router.navigate(['edit'],{relativeTo:this.route});
  }

}

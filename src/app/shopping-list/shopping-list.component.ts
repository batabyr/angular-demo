import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredients } from '../Shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients:Ingredients[];
  private igChangeSub: Subscription;

  constructor(
    private slService:ShoppingListService
  ) { }
  

  ngOnInit() {

    this.ingredients=this.slService.getIngredients();
    this.igChangeSub=this.slService.ingredientChanged.subscribe(
      (ingredients:Ingredients[])=>{
        this.ingredients=ingredients;
      }
    );

  }

  onEditItem(index:number){
    this.slService.startedEditing.next(index);
  }

  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }


}

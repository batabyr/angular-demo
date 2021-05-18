import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredients } from 'src/app/Shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { format } from 'url';



@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {

  @ViewChild('f',{static:true})slForm:NgForm;

  subscription: Subscription; 
  editMode=false;
  editedIndexIndex:number;
  editedIngredient:Ingredients;


  constructor(
    private slService: ShoppingListService
  ) { }

  ngOnInit() {
    this.subscription=this.slService.startedEditing.subscribe(
      (index:number)=>{
        this.editedIndexIndex=index;
        this.editMode=true;
        this.editedIngredient=this.slService.getIngredientsByIndex(this.editedIndexIndex);
        this.slForm.setValue({
          name:this.editedIngredient.name,
          amount:this.editedIngredient.amount
        })
      }
    );
  }


  onAddItems(form: NgForm) {

    console.log(form.value.name + '  ' + form.value.amount)
    const newIngredient = new Ingredients(form.value.name, form.value.amount);

    if(this.editMode){
      this.slService.upgradeIngredient(this.editedIndexIndex,newIngredient);
    }else{
      this.slService.addIngredient(newIngredient);
    }
    

    this.editMode=false;
    form.reset();

  }

  onClear(){
    this.editMode=false;
    this.slForm.reset();
    
  }

  onDelete(){
    this.slService.deleteIngredient(this.editedIndexIndex);
    this.onClear();
  }

  ngOnDestroy(){

    this.subscription.unsubscribe;
  }

}

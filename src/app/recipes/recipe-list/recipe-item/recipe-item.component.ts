import { Component, OnInit, Input} from '@angular/core';
import { Recipe } from '../../recipies.model';
import { RecipeService } from '../../recipe.service';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe:Recipe;
  @Input() index:number;

  constructor(
    
  ) { }

  ngOnInit() {
  }



}

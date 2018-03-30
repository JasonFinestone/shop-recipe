import { Component, OnInit } from '@angular/core';
import {IngredientModel} from "../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients = [ new IngredientModel('Piss', 15), new IngredientModel('Apples', 6),
    new IngredientModel('Shit', 8)];

  constructor() { }

  ngOnInit() {
  }

}

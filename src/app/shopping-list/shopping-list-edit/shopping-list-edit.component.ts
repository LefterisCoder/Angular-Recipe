import {Component, ElementRef, OnInit,  ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit{
  @ViewChild('nameInput',{static:false}) nameInputRef!:ElementRef;
  @ViewChild('nameInput',{static:false}) amountInputRef!:ElementRef;
constructor(private slService:ShoppingListService) {
}
ngOnInit() {

}
  onAddItem(){
  const ingName= this.nameInputRef.nativeElement.value;
  const ingAmount = this.amountInputRef.nativeElement.value;
  const newIngredient = new Ingredient(ingName,ingAmount);
  this.slService.addIngredient(newIngredient);
  }

}

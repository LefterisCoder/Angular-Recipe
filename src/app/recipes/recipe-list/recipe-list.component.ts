import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is simply a test',
      'https://images.ctfassets.net/0gwlbcfnpdat/7Hj03xwosSYIRpABxgIMky/5c001d1d5ed0dd53caf6124c0e7da9de/KFC-Bucket-Snapcode-260x260-c.png'),
    new Recipe('A Test Recipe','This is simply a test',
      'https://images.ctfassets.net/0gwlbcfnpdat/7Hj03xwosSYIRpABxgIMky/5c001d1d5ed0dd53caf6124c0e7da9de/KFC-Bucket-Snapcode-260x260-c.png')
  ];
  constructor() {
  }

  ngOnInit() {

  }
}

import { Component } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-my-recipe',
  templateUrl: './my-recipe.component.html',
  styleUrls: ['./my-recipe.component.css']
})
export class MyRecipeComponent {
  recipeData!: Observable<any>;
  constructor(private firestore: Firestore, private router: Router){
    this.getData();
  }
  getData(){
    const collectionInstance = collection(this.firestore, 'recipe');
    collectionData(collectionInstance).subscribe(val =>{
      console.log(val);
    })

    this.recipeData = collectionData(collectionInstance);
  }
}

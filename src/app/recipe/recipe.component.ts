import { Component } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})

export class RecipeComponent {
  recipeData1!: Observable<any>;
  constructor(private firestore: Firestore, private router: Router){
    this.getData1();
  }
  getData1(){
    const collectionInstance1 = collection(this.firestore, 'publicrec');
    collectionData(collectionInstance1).subscribe(val =>{
      console.log(val);
    })

    this.recipeData1 = collectionData(collectionInstance1);
  }
}

import { Component } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recreate',
  templateUrl: './recreate.component.html',
  styleUrls: ['./recreate.component.css']
})
export class RecreateComponent {
 
  constructor(private firestore: Firestore, private router: Router){}
  addData(f:any){
    console.log(f.value);
    const collectionInstance = collection(this.firestore, 'recipe');
    addDoc(collectionInstance, f.value).then(() =>{
      console.log("Data Saved");
      this.router.navigate(['home']);
    })
    .catch((err)=>{
      console.log(err);
    })
    
  }

  getData(){
    const collectionInstance = collection(this.firestore, 'recipe');
    collectionData(collectionInstance).subscribe(val =>{
      console.log(val);
    })
  }
}

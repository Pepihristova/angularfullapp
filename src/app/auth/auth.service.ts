import { Injectable } from '@angular/core';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { LoginForm, RegisterForm } from '../types/Auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean = false;
  isLoading = false;
  constructor(private router: Router) { }

  login(form: LoginForm){
    if(this.isLoading) return;
    this.isLoading= true;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        
        const user = userCredential.user;
        alert("Log in success!");
        this.isAuthenticated=true;
        this.router.navigate(['']);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthenticated=false;
        alert("Грешен имейл или парола!");
      })
      .finally(()=> (this.isLoading=false));
      ;
  }
  passwordMatched: boolean = true;
  register(form: RegisterForm){
    if(this.isLoading) return;
    this.isLoading= true;

  if(form.password!==form.confpass){
    this.passwordMatched = false;
    return;
  }
  const auth = getAuth();
createUserWithEmailAndPassword(auth, form.email,form.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    this.isAuthenticated=true;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    this.isAuthenticated=false;
  })
  .finally(()=> (this.isLoading=false));
  ;
  }

  logout(){
    const auth = getAuth();
    signOut(auth).then(() => {
      this.router.navigate(['login']);
      this.isAuthenticated=false;
    }).catch((error) => {
      // An error happened.
    });
  }
}

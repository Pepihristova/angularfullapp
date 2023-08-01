import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe/recipe.component';
import { MyRecipeComponent } from './my-recipe/my-recipe.component';
import { RecreateComponent } from './recreate/recreate.component';
import { AuthModule } from './auth/auth.module';




@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    MyRecipeComponent,
    RecreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

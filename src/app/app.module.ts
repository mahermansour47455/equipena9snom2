import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquipeComponent } from './equipe/equipe.component';
import { AddEquipeComponent } from './add-equipe/add-equipe.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
import { UpdateEquipeComponent } from './update-equipe/update-equipe.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
import { NomrechercherComponent } from './nomrechercher/nomrechercher.component';

@NgModule({
  declarations: [
    AppComponent,
    EquipeComponent,
    AddEquipeComponent,
    UpdateProduitComponent,
    UpdateEquipeComponent,
    LoginComponent,
    ForbiddenComponent,
    RechercheParCategorieComponent,
    NomrechercherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

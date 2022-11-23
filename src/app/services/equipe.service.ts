
import { Injectable } from '@angular/core';
import { Equipe } from '../model/equipe.model';
import { League } from '../model/league.model';
@Injectable({
providedIn: 'root'
})
export class EquipeService {
equipe!: Equipe[]; //un tableau de equipe
leagues!: League[] ;

equipeRecherche!: Equipe[];
equipeRecherche2!: Equipe[];
constructor() {
  this.leagues=[{id:1,legue:"ligue1"},{id:2,legue:"Bundesliga"},{id:3,legue:"Premier League"},{id:4,legue:"Serie A"}];
this.equipe = [
  { id : 1, nom: "juvents", classement:1, datematch
: new Date("01/14/2011"),league:this.leagues[3]},
{ id : 2, nom: "paris saint german", classement:6, datematch
: new Date("01/14/2011"),league:this.leagues[0]},
{ id: 3, nom: "bayern munich", classement: 2, datematch
 : new Date("12/17/2010"),league:this.leagues[1]},
{ id: 4, nom:"Manchester-city", classement: 3, datematch
 : new Date("02/20/2020"),league:this.leagues[2]},
 { id : 5, nom: "Milan", classement:7, datematch
: new Date("01/14/2011"),league:this.leagues[3]},
{ id : 5, nom: "Monaco", classement:5, datematch
: new Date("01/14/2011"),league:this.leagues[0]},

  
];
}
listeEquipe():Equipe[] {
  return this.equipe;
}
ajouterequipe( e: Equipe){
  this.equipe.push(e);
  }
  supprimerequipe( prod: Equipe){
    //supprimer le produit prod du tableau equipe
    const index = this.equipe.indexOf(prod, 0);
    if (index > -1) {
    this.equipe.splice(index, 1);
    }
    //ou Bien
    /* this.equipe.forEach((cur, index) => {
    if(prod.idProduit === cur.idProduit) {
    this.equipe.splice(index, 1);
    }
    }); */
    }
    equipee!:Equipe;
    consulter(id:number): Equipe{
this.equipee= this.equipe.find(p => p.id == id)!;
return this.equipee;
    }

updateEquipe(p:Equipe)
{

this.supprimerequipe(p);
this.ajouterequipe(p);
}
listerLeague():League[]{
  return this.leagues;


}
consulterLeague(id:number):League{
  return this.leagues.find(p => p.id == id)!;

}
rechercherParlege(id: number): Equipe[]{
  this.equipeRecherche = [];
 
  this.equipe.forEach((cur, index) => {
   if(id == cur.league.id) {
       console.log("cur "+cur);
      this.equipeRecherche.push(cur);
       }
 });
 return this.equipeRecherche;
 }
 rechercherParnom(nom: String): Equipe[]{
  this.equipeRecherche2 = [];
 
  this.equipe.forEach((cur, index) => {
   if(nom == cur.nom) {
       console.log("cur "+cur);
      this.equipeRecherche2.push(cur);
       }
 });
 return this.equipeRecherche2;
 }

}


  
  

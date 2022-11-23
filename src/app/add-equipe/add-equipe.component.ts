
import { Component, OnInit } from '@angular/core';
import { Equipe } from '../model/equipe.model';
import { EquipeService } from '../services/equipe.service';
import { Router } from '@angular/router';
import { League } from '../model/league.model';

@Component({
  selector: 'app-add-equipe',
  templateUrl: './add-equipe.component.html',
  styleUrls: ['./add-equipe.component.css']
})
export class AddEquipeComponent implements OnInit {
  newEquipe = new Equipe();
  league!: League[] 
  newid!:number;
  newleague!:League;
  addequipe(){
    this.newleague=this.equipeservices.consulterLeague(this.newid);
    this.newEquipe.league=this.newleague;
    this.equipeservices.ajouterequipe(this.newEquipe);
    this.router.navigate(['equipe']);
  }
  constructor(private equipeservices: EquipeService,
    private router :Router) { }

  ngOnInit(): void {
    this.league=this.equipeservices.listerLeague();

  }

}

import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import {Equipe} from '../model/equipe.model'

import { EquipeService } from '../services/equipe.service';
@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {
  equipe?:Equipe[];
  constructor(private equipeservices: EquipeService,
    public authService:AuthService) {

    this.equipe = equipeservices.listeEquipe();
   }

  ngOnInit(): void {
  }
  supprimerequipe(p: Equipe)
{
  let conf=confirm("etes vous sur");
  if(conf)
this.equipeservices.supprimerequipe(p);
}

}

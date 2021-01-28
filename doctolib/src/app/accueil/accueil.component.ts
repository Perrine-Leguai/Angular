import { Component, OnInit } from '@angular/core';
import { GestionDocteursService } from '../gestion-docteurs.service';
import { GestionRdvsService } from '../gestion-rdvs.service';
import { Docteur } from '../modeles/docteur.model';
import {Rdv} from '../modeles/rdv.model';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  get ;
  personne: Docteur[];
  countDoc:  number ;
  getRdv;
  rdv: Rdv[];
  countRdv: number;
  
  constructor(
    private docteurService : GestionDocteursService,
    private rdvService : GestionRdvsService
    ) { }

  ngOnInit(): void {
    this.get = this.docteurService.getDocs();
    this.get.subscribe((response) => {
      this.personne = response;
      this.countDoc = this.personne.length; 
    }, (error) => {
      console.log(error);
    })

    this.getRdv = this.rdvService.getAllRdvs();
    this.getRdv.subscribe((response) => {
      this.rdv = response;
      this.countRdv = this.rdv.length; 
    }, (error) => {
      console.log(error);
    })
  }
  
}





  

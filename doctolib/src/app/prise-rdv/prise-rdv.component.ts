import { Component, OnInit } from '@angular/core';
import { GestionSpecialitesService } from '../gestion-specialites.service'
import { Specialite } from '../modeles/specialite.model'
import { Docteur } from '../modeles/docteur.model'
import { GestionDocteursService } from '../gestion-docteurs.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-prise-rdv',
  templateUrl: './prise-rdv.component.html',
  styleUrls: ['./prise-rdv.component.css']
})
export class PriseRdvComponent implements OnInit {
  specialites: Specialite[];
  listeDocs : Docteur[];
  getSpecialite:any;
  getDoc: any;
  specialiteRecuperee: string;
  docRecupere: string;
  dateRecuperee: string;
  doc : Docteur;
  getDoc1: any;

  constructor(
    private specialiteService : GestionSpecialitesService, 
    private docteurService : GestionDocteursService,
    private spinnerService : NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinnerService.show()
    // récupération pour l'affichage de toutes les spécialités
    this.getSpecialite = this.specialiteService.getAllSpecialites();
    this.getSpecialite.subscribe((response) => {
      this.specialites = response;
      this.spinnerService.hide()
    }, (error) => {
      console.log(error);
    }) 
  }

  recupSpecialite(event : Event){
    this.spinnerService.show()
    this.specialiteRecuperee = (<HTMLInputElement>event.target).value
    // affichage des docteurs ayant cette spécialité
    this.getDoc = this.specialiteService.getDocsBySpecialite(this.specialiteRecuperee);
    this.getDoc.subscribe((response) =>{
      this.spinnerService.hide()
      this.listeDocs = response;
      
    })
  }

  recupDoc(event : Event){
    this.docRecupere = (<HTMLInputElement>event.target).value
    console.log(event);
    this.spinnerService.show()
    this.getDoc1 = this.docteurService.getOneDocteur(this.docRecupere);
    this.getDoc1.subscribe((response)=>{
      this.doc = response;
      console.log(this.doc);
      this.spinnerService.hide()
    })
  }

  dateRecup(event :Event){
    this.spinnerService.show()
    this.dateRecuperee = (<HTMLInputElement>event.target).value
    this.spinnerService.hide()
  }

  
}

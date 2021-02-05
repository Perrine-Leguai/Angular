import { Component, OnInit } from '@angular/core';
import { GestionSpecialitesService } from '../gestion-specialites.service'
import { Specialite } from '../modeles/specialite.model'
import { Docteur } from '../modeles/docteur.model'
import { GestionDocteursService } from '../gestion-docteurs.service';
import { GestionRdvsService } from '../gestion-rdvs.service';
import { Patient } from '../modeles/patient.model';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

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
  patientId : number = 8 ; //sera initialisé à la connexion
  navigationSubscription;

  constructor(
    private specialiteService : GestionSpecialitesService,
    private docteurService : GestionDocteursService,
    private priseRdvService : GestionRdvsService,
    private router: Router,
    private route : ActivatedRoute) {

    }

  ngOnInit(): void {

    // récupération pour l'affichage de toutes les spécialités
    this.getSpecialite = this.specialiteService.getAllSpecialites();
    this.getSpecialite.subscribe((response) => {
      this.specialites = response;

    }, (error) => {
      console.log(error);
    })
  }

  recupSpecialite(event : Event){

    this.specialiteRecuperee = (<HTMLInputElement>event.target).value
    console.log(this.specialiteRecuperee);
    // affichage des docteurs ayant cette spécialité
    this.getDoc = this.specialiteService.getDocsBySpecialite(this.specialiteRecuperee);
    this.getDoc.subscribe((response) =>{

      this.listeDocs = response;

    })
  }

  recupDoc(event : Event){
    this.docRecupere = (<HTMLInputElement>event.target).value

    this.getDoc1 = this.docteurService.getOneDocteur(this.docRecupere);
    this.getDoc1.subscribe((response)=>{
      this.doc = response;
      console.log(this.doc);

    })
  }

  dateRecup(event :Event){

    this.dateRecuperee = (<HTMLInputElement>event.target).value

  }

  validerRdv(){
    this.priseRdvService.postRdv(this.dateRecuperee, this.doc.id, this.patientId);
    this.router.navigate(['/bienvenue'], {relativeTo: this.route});

  }




}

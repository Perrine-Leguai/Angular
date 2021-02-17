import { Component, OnInit } from '@angular/core';
import { GestionSpecialitesService } from '../gestion-specialites.service'
import { Specialite } from '../modeles/specialite.model'
import { Docteur } from '../modeles/docteur.model'
import { GestionDocteursService } from '../gestion-docteurs.service';
import { GestionRdvsService } from '../gestion-rdvs.service';
import { Patient } from '../modeles/patient.model';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { GestionPatientsService } from '../gestion-patients.service';

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
  patientId : number ; //sera initialisé à la connexion
  docId:number;
  navigationSubscription;
  listePatientsSuivis: any [];
  getPatientsSuivis: any;
  patientRecupere: any;
  getPatient1: any;
  patient: any;

  //recupération des données de la personne connectée
  profil : string= localStorage.getItem('profilRecupere');
  personneConnectee = JSON.parse(localStorage.getItem('userInfo'));

  constructor(
    private specialiteService : GestionSpecialitesService,
    private docteurService : GestionDocteursService,
    private priseRdvService : GestionRdvsService,
    private patientService : GestionPatientsService,
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
    if(this.profil=="docteur"){
      this.getPatientsSuivis = this.patientService.getPatientsParDocteur(this.personneConnectee.id);
      this.getPatientsSuivis.subscribe((response)=>{
      this.listePatientsSuivis = response;
    });
    }
    
  }

  recupSpecialite(event : Event){

    this.specialiteRecuperee = (<HTMLInputElement>event.target).value
    
    // affichage des docteurs ayant cette spécialité
    this.getDoc = this.specialiteService.getDocsBySpecialite(this.specialiteRecuperee);
    this.getDoc.subscribe((response) =>{

      this.listeDocs = response;

    })
  }

  recupDoc(event : Event){
    this.patientId= this.personneConnectee.id

    this.docRecupere = (<HTMLInputElement>event.target).value

    this.getDoc1 = this.docteurService.getOneDocteur(this.docRecupere);
    this.getDoc1.subscribe((response)=>{
      this.doc = response;
    })

    this.docId = this.doc.id;
  }

  recupPatient(event: Event){
    this.docId = this.personneConnectee.id
    this.patientRecupere = (<HTMLInputElement>event.target).value

    this.getPatient1 = this.patient.getOnePatient(this.patientRecupere);
    this.getPatient1.subscribe((response)=>{
      this.patient = response;
    })

    this.patientId = this.patient.id
  }
  

  dateRecup(event :Event){
    this.dateRecuperee = (<HTMLInputElement>event.target).value
  }

  validerRdv(){

    this.priseRdvService.postRdv(this.dateRecuperee, this.doc.id, this.patientId);
    this.router.navigate(['/bienvenue/infos'], {relativeTo: this.route});
  }




}

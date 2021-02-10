import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { forEachChild, textChangeRangeIsUnchanged } from 'typescript';
import { GestionDocteursService } from '../gestion-docteurs.service';
import { GestionPatientsService } from '../gestion-patients.service';
import { GestionSpecialitesService } from '../gestion-specialites.service';
import { Docteur } from '../modeles/docteur.model';
import { Patient } from '../modeles/patient.model';
import { Specialite } from '../modeles/specialite.model';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  //variables qui permettent l'affichage dynamique du formulaire
  profilRecupere: string;
  ok:boolean =false ;
  specialites: Specialite[];


  //variables pour l'utilistation de l'api
  getSpecialite:any;
  post :any;
  docEnvoye: Docteur;
  patientEnvoye: Patient;

  //variable de stockage des infos utilisateur
  personne: any;
  username: string;
  nom: string;
  prenom: string;
  adresse: string;
  codePostal: string;
  ville: string;
  noIdentification: string;
  specialite: any;
  email: string;
  telephone: string;
  lienSiteInternet: string;
  password: string;

  //variable pour la comparaison des mdp
  mdp: string;
  confirmMdp:string;

  //variable pour la confirmation de la dispo du pseudo
  pseudo: boolean = false;
  pseudos: any= [];

  //variable de verification de l'inscription
  error: any;
  pb: boolean = false;


  constructor(
    private specialiteService : GestionSpecialitesService,
    private patientService : GestionPatientsService,
    private docteurService: GestionDocteursService,
    private fb: FormBuilder) { }

  //affichage du forumlaire selon profil
  recupProfil(event : Event){
    this.profilRecupere = (<HTMLInputElement>event.target).value

  }

  ngOnInit(): void {

      //Liste des specialités selectable
    this.getSpecialite = this.specialiteService.getAllSpecialites();
    this.getSpecialite.subscribe((response) => {
      this.specialites = response;

    }, (error) => {
      console.log(error);
    })
  }


  onSubmit(monForm) {
    // TODO: Use EventEmitter with form value

    if(this.profilRecupere =="patient"){
      this.personne= {
        "id" : null,
        "numeroCarteVitale" : this.noIdentification,
        "nom" : this.nom,
        "prenom" : this.prenom,
        "adresse" : this.adresse,
        "codePostal": this.codePostal,
        "ville" : this.ville,
        "email" : this.email,
        "telephone" : this.telephone,
        "username" : this.username,
        "password" : this.password
      }

      this.error =this.post= this.patientService.postOnePatient(this.personne);
      if(this.error){
        this.pb = true;
      }

    }else if(this.profilRecupere=="docteur"){
      this.personne= {
        "id" : null,
        "numeroOrdre" : this.noIdentification,
        "nom" : this.nom,
        "prenom" : this.prenom,
        "adresseTravail" : this.adresse,
        "codePostal": this.codePostal,
        "ville" : this.ville,
        "email" : this.email,
        "telephone" : this.telephone,
        "specialites" : [this.specialite],
        "username" : this.username,
        "password" : this.password
      }
      this.post= this.docteurService.postOneDocteur(this.personne);

    }
  }


// METHODES POUR TESTER LES MOTS DE PASSE
  enregistrerMDP(eventEnregistrer){
    this.mdp = (<HTMLInputElement>eventEnregistrer.target).value;
  }

  confirmationMDP(eventConfirmer){
    this.confirmMdp = (<HTMLInputElement>eventConfirmer.target).value;
    this.ok=false;
    if(this.confirmMdp===this.mdp){
      this.ok = true;
    }
  }

  confirmationPseudo(eventConfirmerUsername){
    var pseudoTape = (<HTMLInputElement>eventConfirmerUsername.target).value;
    if(this.profilRecupere=="patient"){
      var listePseudo = this.patientService.getAllPatientsPseudo();
      ;
      listePseudo.subscribe((response) => {
        this.pseudos = response;
        console.log(this.pseudos);
          for(var pseudoT of this.pseudos){
            if(pseudoT==pseudoTape){
              this.pseudo = true;
              console.log("je suis dans la comparaison");
            }
          }
      }, (error) => {
        console.log(error);
      })


    }

  }
  //GERER LA SELECTION MULTIPLE
  selectMultiple(e) {
    var el = e.target;
    if (el.tagName.toLowerCase() == 'option' && el.parentNode.hasAttribute('multiple')) {
        e.preventDefault();

        // toggle selection
        if (el.hasAttribute('selected')){el.removeAttribute('selected');}
        else {el.setAttribute('selected', '')};

        // hack to correct buggy behavior
        var select = el.parentNode.cloneNode(true);
        el.parentNode.parentNode.replaceChild(select, el.parentNode);
    }
  }

  //recupererSpecialite(event: Event){
    //   event.preventDefault();
    //   this.specialiteRecuperee = (<HTMLInputElement>event.target).value;


    // }
}

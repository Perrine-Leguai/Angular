import { Component, OnInit } from '@angular/core';
import { GestionDocteursService } from '../../gestion-docteurs.service';
import { GestionPatientsService } from '../../gestion-patients.service';
import { Docteur } from '../../modeles/docteur.model';

@Component({
  selector: 'app-affichage',
  templateUrl: './affichage.component.html',
  styleUrls: ['./affichage.component.css']
})
export class AffichageComponent implements OnInit {

    get ;
    profil : string;
    id:number ;
    personne: any;
    profilDoc: boolean = false;
  constructor(
    private docteurService : GestionDocteursService,
    private patientService : GestionPatientsService) { }

  ngOnInit(): void {
    if(this.profil ==="DOCTEUR"){
      this.get = this.docteurService.getOneDocteur(2);
      this.profilDoc=true;
    }else if(this.profil==="PATIENT"){
      this.get = this.patientService.getOnePatient(1);
    }
    this.get.subscribe((response) => {
      this.personne = response;
    }, (error) => {
      console.log(error);
    })

  }



}

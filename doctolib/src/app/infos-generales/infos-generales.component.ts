import { Component, OnInit } from '@angular/core';
import { GestionDocteursService } from '../gestion-docteurs.service';
import { GestionPatientsService } from '../gestion-patients.service';
import { Docteur } from '../modeles/docteur.model';

@Component({
  selector: 'app-infos-generales',
  templateUrl: './infos-generales.component.html',
  styleUrls: ['./infos-generales.component.css']
})
export class InfosGeneralesComponent implements OnInit {
  get ;
  personne: any;
  profil: string = "DOCTEUR"; //pour le test
  profilDoc: boolean;
  profilPatient: boolean;
  constructor(
    private docteurService : GestionDocteursService,
    private patientService : GestionPatientsService) { }

  ngOnInit(): void {
    if(this.profil ==="DOCTEUR"){
      this.get = this.docteurService.getOneDocteur(2);
      this.profilDoc=true;
    }else if(this.profil==="PATIENT"){
      this.get = this.patientService.getOnePatient(1);
      this.profilPatient = true;
    }

    this.get.subscribe((response) => {
      this.personne = response;
      console.log('on est al', this.personne);
    }, (error) => {
      console.log(error);
    })
  }


}

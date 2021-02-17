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
    
  }


}

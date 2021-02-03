import { Component, OnInit } from '@angular/core';
import { GestionDocteursService } from '../gestion-docteurs.service';
import { GestionPatientsService } from '../gestion-patients.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  delete: any ;
  profil: string = "PATIENT";
  id:number = 1;
  constructor(
    private docteurService: GestionDocteursService,
    private patientService : GestionPatientsService
  ) { }

  ngOnInit(): void {
  }

  //GERER LE PROFIL ET L'ID + RECUPERATION --> COOKIE
  supprimerCompte(event){
    console.log(event);
    if(this.profil =="PATIENT"){
      this.delete = this.patientService.deleteOnePatient(this.id);
    }else if (this.profil =="DOCTEUR"){
      this.delete = this.docteurService.deleteOneDocteur(this.id);
    }

    this.delete.subscribe((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    })
  }
}

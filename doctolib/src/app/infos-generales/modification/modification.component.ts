import { Component, OnInit } from '@angular/core';
import { GestionDocteursService } from 'src/app/gestion-docteurs.service';
import { GestionPatientsService } from 'src/app/gestion-patients.service';

@Component({
  selector: 'app-modification',
  templateUrl: './modification.component.html',
  styleUrls: ['./modification.component.css']
})
export class ModificationComponent implements OnInit {
  id:number = 2;  //RECUPERER L'ID DE LA PERSONNE CONNECTEE
  profil: string ="PATIENT "; //RECUPERER LE PROFIL DE LA PERSONNE CONNECTEE
  get:any;
  personne: any;
  constructor(
    private docteurService : GestionDocteursService,
    private patientService: GestionPatientsService,
  ) { }

  ngOnInit(): void {
    if(this.profil=="PATIENT"){
      this.get= this.patientService.getOnePatient(this.id);
      
    }else if(this.profil =="DOCTEUR"){
      this.get= this.docteurService.getOneDocteur(this.id);
    }
    this.get.subscribe((response) => {
        
        this.personne = response ;
        console.log(this.personne);
      }, (error) => {
        console.log(error);
      })
    }

  enregistrerModif(event){
    console.log(event)
  }
}

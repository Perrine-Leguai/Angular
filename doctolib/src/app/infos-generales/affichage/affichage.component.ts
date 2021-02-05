import { Component, OnInit, Self } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GestionSpecialitesService } from 'src/app/gestion-specialites.service';
import { Specialite } from 'src/app/modeles/specialite.model';
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
    get1;
    profil : string="DOCTEUR";
    id:number ;
    personne: any;
    profilDoc: boolean = false;
    listeSpe: Specialite[];
  constructor(
    private docteurService : GestionDocteursService,
    private patientService : GestionPatientsService,
    private specialiteService : GestionSpecialitesService) { }

  ngOnInit(): void {
    if(this.profil ==="DOCTEUR"){
      this.get = this.docteurService.getOneDocteur(2);
      this.profilDoc=true;
      
    }else if(this.profil==="PATIENT"){
      this.get = this.patientService.getOnePatient(1);
    }
    this.get.subscribe((response) => {
      this.personne = response;
      
      for(var spe of this.personne.specialites){
        
        this.get1 = this.specialiteService.getOneSpecialite(Number(spe))
        this.get1.subscribe((response) => {
          this.listeSpe= response;
          
        }, (error) => {
          console.log(error);
        })
      }
      
      
    }, (error) => {
      console.log(error);
    })

   
  }

  

}

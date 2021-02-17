import { Component, OnInit, Self } from '@angular/core';
//MODELE
import { Specialite } from 'src/app/modeles/specialite.model';
//SERVICES
import { GestionSpecialitesService } from 'src/app/gestion-specialites.service';
import { GestionDocteursService } from '../../gestion-docteurs.service';
import { GestionPatientsService } from '../../gestion-patients.service';
//SPINNER
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-affichage',
  templateUrl: './affichage.component.html',
  styleUrls: ['./affichage.component.css']
})
export class AffichageComponent implements OnInit {

    get ;
    get1;
    profil : string= localStorage.getItem('profilRecupere');
    id:number;
    personneConnectee = JSON.parse(localStorage.getItem('userInfo'));
    personne: any;
    profilDoc: boolean = false;
    listeSpe: Specialite[];
  constructor(
    private docteurService : GestionDocteursService,
    private patientService : GestionPatientsService,
    private specialiteService : GestionSpecialitesService,
    private SpinnerService:NgxSpinnerService
    ) { }

  ngOnInit(): void {
    
    console.log(this.personneConnectee);
    this.SpinnerService.show();
    if(this.profil ==="docteur"){
      this.get = this.docteurService.getOneDocteur(this.personneConnectee.id);
      this.profilDoc=true;
      
    }else if(this.profil==="patient"){
      
      this.get = this.patientService.getOnePatient(this.personneConnectee.id);
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
      
      this.SpinnerService.hide();
    }, (error) => {
      console.log(error);
    })

   
  }

  

}

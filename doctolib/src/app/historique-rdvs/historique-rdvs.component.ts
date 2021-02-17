import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { GestionRdvsService } from '../gestion-rdvs.service';
import {Rdv} from '../modeles/rdv.model'
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-historique-rdvs',
  templateUrl: './historique-rdvs.component.html',
  styleUrls: ['./historique-rdvs.component.css'],
  providers: [DatePipe] 
})
export class HistoriqueRdvsComponent implements OnInit {

  myDate = new Date();
  currentDate;
  get;
  listeRdvs: Rdv [];

  
  profil : string= localStorage.getItem('profilRecupere');
  id:number;
  personneConnectee = JSON.parse(localStorage.getItem('userInfo'));
constructor(
  private datePipe: DatePipe,
  private rdvService : GestionRdvsService,
  private SpinnerService : NgxSpinnerService
  ){
    
    this.currentDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
}

ngOnInit(){
  
  this.get = this.rdvService.getRdvsSelonLaPersonneConnectee(this.personneConnectee.id, this.profil);  //id dynamique ici normalement
  
  this.get.subscribe((response) => {
    this.SpinnerService.show();
    
    this.listeRdvs = response;
    
    this.SpinnerService.hide();
  }, (error) => {
    console.log(error);
  })
}


}


  

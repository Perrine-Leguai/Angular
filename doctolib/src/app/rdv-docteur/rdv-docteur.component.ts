import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { GestionRdvsService } from '../gestion-rdvs.service';
import {Rdv} from '../modeles/rdv.model'


@Component({
  selector: 'app-rdv-docteur',
  templateUrl: './rdv-docteur.component.html',
  styleUrls: ['./rdv-docteur.component.css'],
  providers: [DatePipe]  
})

export class RdvDocteurComponent implements OnInit {
  myDate = new Date();
  currentDate;
  get;
  rempli: boolean =true ;
  listeRdvs: Rdv [];
constructor(
  private datePipe: DatePipe,
  private rdvService : GestionRdvsService
  ){

    this.currentDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
}

ngOnInit(){
  this.get = this.rdvService.getRdvsSelonLaPersonneConnectee(2, "DOCTEUR");  //id dynamique ici normalement
  this.get.subscribe((response) => {
    this.listeRdvs = response;
    let contenuDiv = document.getElementById( 'ajdRdv' );
    if(!contenuDiv){
      this.rempli=false;
    }
  }, (error) => {
    console.log(error);
  })
}

}

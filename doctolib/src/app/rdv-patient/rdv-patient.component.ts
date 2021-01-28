import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { GestionRdvsService } from '../gestion-rdvs.service';
import {Rdv} from '../modeles/rdv.model'

@Component({
  selector: 'app-rdv-patient',
  templateUrl: './rdv-patient.component.html',
  styleUrls: ['./rdv-patient.component.css'],
  providers: [DatePipe]
})
export class RdvPatientComponent implements OnInit {
  myDate = new Date();
  currentDate;
  get;
  listeRdvs: Rdv [];
constructor(
  private datePipe: DatePipe,
  private rdvService : GestionRdvsService
  ){

    this.currentDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
}

ngOnInit(){
  this.get = this.rdvService.getRdvsSelonLaPersonneConnectee(1, "PATIENT");  //id dynamique ici normalement
  this.get.subscribe((response) => {
    this.listeRdvs = response;
    console.log(this.listeRdvs)
  }, (error) => {
    console.log(error);
  })
}

}

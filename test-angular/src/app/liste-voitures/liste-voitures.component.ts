import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {GestionVoitureService} from '../gestion-voiture.service'
@Component({
  selector: 'app-liste-voitures',
  templateUrl: './liste-voitures.component.html',
  styleUrls: ['./liste-voitures.component.css'],
})
export class ListeVoituresComponent implements OnInit {
  @Output()selectVoiture = new EventEmitter();

  public listeVoitures = [];

  addReceivedVoiture(voiture: {marque:string, estDemarree:boolean, details : string}){
    this.listeVoitures.push(voiture); // ajoute un élément à un tableau
  }
  demarrerArreter(marque:string){
    for (const voiture of this.listeVoitures) {
      if(marque === voiture.marque){
        if(voiture.estDemarree){
          voiture.estDemarree = false ;
        } else if(voiture.estDemarree ==false ){
          voiture.estDemarree;
        }
      }
    }
  }

  receivedDetails(detailsRecus: string){
    this.selectVoiture.emit(detailsRecus);
  }

  constructor(private voitures : GestionVoitureService) { } //crée une propriété service privée qui sera dispo dans la classe

  ngOnInit(): void {
    this.listeVoitures = this.voitures.getVoitures()
  }

}



import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestionVoitureService {

  constructor() { }
  voitures =[
    {
      marque: "RENAUL",
      estDemarree: true,
      details : "Voiture cosy, de qualité, idéale pour la ville"
    },
    {
      marque: "FORD",
      estDemarree: false,
      details : "Berline confortable qui vous accompagnera dans toutes vos aventures sur les routes."
    },
    {
      marque: "KIA",
      estDemarree: true,
      details : "Véhicule utilitaire de grande capacité, saura transporter aussi bien vos matériaux que vos envies de road trip"
    }
  ]

  selectVoiture = new EventEmitter<string>();   //déclencheur d'évènement

  getVoitures(){
    return this.voitures;
  }

  addNewVoiture(voiture:{marque:string, estDemarree:boolean, details:string}){
    this.voitures.push(voiture);
  }

 
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-voiture',
  templateUrl: './liste-voiture.component.html',
  styleUrls: ['./liste-voiture.component.css']
})
export class ListeVoitureComponent implements OnInit {

  voitures: {marque: string, status: string}[]  = [
    {
      marque: "OPEL",
      status: "Démarrée"
    },
    {
      marque: "FORD",
      status: "Arrêtée"
    },
    {
      marque: "KIA",
      status: "Démarrée"
    }
  ];

  addReceivedVoiture(voiture: {marque:string, status:string}){
    this.voitures.push(voiture); // ajoute un élément à un tableau
  }
  demarrerArreter(marque:string){
    for (const voiture of this.voitures) {
      if(marque === voiture.marque){
        if(voiture.status == "Démarrée"){
          voiture.status = "Arrêtée";
        } else if(voiture.status == "Arrêtée"){
          voiture.status = "Démarrée";
        }
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}

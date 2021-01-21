import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voitures',
  templateUrl: './voitures.component.html',
  styleUrls: ['./voitures.component.css']
})
export class VoituresComponent implements OnInit {
  voitures: {marque: string, statut:string}[]=[
    {
      marque : "Alfa Roméo",
      statut : "démarrée"
    },
    {
     marque: "Fiat",
     statut : "arrêtée"
    },
    {
     marque: "Seat",
     statut :"arrêtée"
    },
    {
     marque : "Citroen",
     statut : "arrêtée"
    }]


    statut: string = Math.random() > 0.5 ? "démarrée" : "arrêtée";
    class: string = "btn btn-success m-2 col-2 mr-5";
    icon: string = "fas fa-play";
  constructor() { }

  ngOnInit(): void { }

  actionnerLaVoiture(marque :string){
    if(this.statut=="arrêtée"){
      this.statut = "démarrée";
      this.class ="btn btn-danger m-2 col-2 mr-5";
      this.icon = "fas fa-stop";
    }else{
      this.statut = "arrêtée";
      this.class ="btn btn-success m-2 col-2 mr-5";
      this.icon = "fas fa-play";
    }
  }
}

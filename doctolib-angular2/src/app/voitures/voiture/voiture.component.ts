import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css']
})


export class VoitureComponent implements OnInit {

  // marque: string = Math.random() >0.8 ? "Alfa Roméo" : (Math.random() > 0.5 ? "Fiat" : (Math.random()>0.3 ? "Peugeot" : "Seat"));
  statut: string = Math.random() > 0.5 ? "démarrée" : "arrêtée";
  class: string = "btn btn-success m-2 col-2 mr-5";
  icon: string = "fas fa-play";

  constructor() { }
  ngOnInit(): void {
  }

  

  actionnerLaVoiture(){
    if(this.statut=="arrêtée"){
      this.statut = "démarrée";
      this.class ="btn btn-danger m-2 col-2 mr-5"
      this.icon = "fas fa-stop"
    }else{
      this.statut = "arrêtée";
      this.class ="btn btn-success m-2 col-2 mr-5"
      this.icon = "fas fa-play"
    }
  }
}

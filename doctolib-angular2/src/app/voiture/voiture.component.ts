import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css']
})
export class VoitureComponent implements OnInit {

  @Input() laVoiture:{marque:string, status:string}; //vient de l'extérieur et c'est le parent qui va la fournir.
  constructor() { }

  ngOnInit(): void {
  }

  demarrerArreter(){ //ne reçoit qu'une voiture: laVoiture
        if(this.laVoiture.status == "Démarrée"){
          this.laVoiture.status = "Arrêtée";
        } else if(this.laVoiture.status == "Arrêtée"){
          this.laVoiture.status = "Démarrée";
        }
  }
}

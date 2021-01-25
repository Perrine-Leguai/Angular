import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { GestionVoitureService } from '../gestion-voiture.service';

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css']
})
export class VoitureComponent implements OnInit {
  @Output()selectVoiture = new EventEmitter<string>();
  @Input()laVoiture:{marque:string, estDemarree:boolean, details:string}; //vient de l'extérieur et c'est le parent qui va la fournir.
  constructor(private gestionVoiture : GestionVoitureService) { }


  ngOnInit(): void {
  }

  demarrerArreter(){ //ne reçoit qu'une voiture: laVoiture
        if(this.laVoiture.estDemarree ){
          this.laVoiture.estDemarree = false;
        } else if(!this.laVoiture.estDemarree){
          this.laVoiture.estDemarree = true;
        }
  }

  onClickVoiture(detailsVoiture : string){
    this.gestionVoiture.selectVoiture.emit(detailsVoiture);  //evenement déclenché, détails récupérés et appelle la fonction dans service, à qui elle passe l'argument détails

  }
}

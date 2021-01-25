import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { GestionVoitureService } from '../gestion-voiture.service';

@Component({
  selector: 'app-ajouter-voiture',
  templateUrl: './ajouter-voiture.component.html',
  styleUrls: ['./ajouter-voiture.component.css'],
})
export class AjouterVoitureComponent implements OnInit {
  // @Output() addVoitureEventEmitter = new EventEmitter<{marque: string, estDemarree: boolean, details : string}>();

  inputValue:string = '';

  constructor(private voitureService : GestionVoitureService) { }

  ngOnInit(): void {
  }

  // onAddVoiture(){
  //   this.addVoitureEventEmitter.emit({marque: this.inputValue, estDemarree: "Arrêtée"});
  // }

  // Utilisée avec la variable locale #monInput (dans le template)
  onAddVoiture2(value:string){
    this.voitureService.addNewVoiture({marque: value, estDemarree: false, details:"Aucun détail n'est encore fourni"})
    // this.addVoitureEventEmitter.emit({marque: value, estDemarree: false, details:"Aucun détail n'est encore fourni"});
  }

  onKeyUp(event:Event){
    this.inputValue = (<HTMLInputElement>event.target).value;
  }



}

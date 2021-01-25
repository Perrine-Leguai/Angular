import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-ajouter-voiture',
  templateUrl: './ajouter-voiture.component.html',
  styleUrls: ['./ajouter-voiture.component.css']
})
export class AjouterVoitureComponent implements OnInit {
  @Output() addVoitureEventEmitter = new EventEmitter<{marque: string, status: string}>();

  inputValue:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  // onAddVoiture(){
  //   this.addVoitureEventEmitter.emit({marque: this.inputValue, status: "Arrêtée"});
  // }

  // Utilisée avec la variable locale #monInput (dans le template)
  onAddVoiture2(value:string){
    this.addVoitureEventEmitter.emit({marque: value, status: "Arrêtée"});
  }

  onKeyUp(event:Event){
    this.inputValue = (<HTMLInputElement>event.target).value;
  }



}

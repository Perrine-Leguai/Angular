import { Component, OnInit } from '@angular/core';
import{GestionVoitureService} from '../gestion-voiture.service'
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

   public detailsDisplayed ="";


   constructor(private voitures : GestionVoitureService) {   //injection
    this.voitures.selectVoiture.subscribe(details=> {   //reçoit lesd éails (l'évenement) et fait un affichage
    this.detailsDisplayed = details
    })  //arrow functions
   }
   ngOnInit(): void {
    //  this.details = this.voitures.displayDetailsVoiture(details)
   }

}

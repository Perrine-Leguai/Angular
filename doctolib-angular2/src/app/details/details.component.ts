import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
  color = Math.random() >0.5 ? "bleue" : "rouge";
  description = Math.random() >0.5 ? "Véhicule confortable, compact et idéal pour la ville" : "Véhicule utilitaire, grande capacité de rangement. Idéal pour vos aventures ou travaux";
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voitures',
  templateUrl: './voitures.component.html',
  styleUrls: ['./voitures.component.css']
})
export class VoituresComponent implements OnInit {
  marque = ["Alfa Roméo", "Fiat", "Seat", "Citroen"]
  constructor() { }

  ngOnInit(): void {
  }

}

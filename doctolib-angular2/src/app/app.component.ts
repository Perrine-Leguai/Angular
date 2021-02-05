import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Produit } from './produit.model.ts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
username :string;
email:string;
listeProduits: Produit[];
  constructor (private http : HttpClient){
    this.http.get<Produit[]>("http://localhost:8000:produits", {
      observe: 'response', //recupère tout la reponse
    }).subscribe((response) => {
      console.log(response)
      this.listeProduits = response;
    }, (error) => {
      console.log(error);
    })
  }
}

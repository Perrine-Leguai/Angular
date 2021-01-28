import { Component, OnInit } from '@angular/core';
import { GestionDocteursService } from './gestion-docteurs.service';
import { Docteur } from './modeles/docteur.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'doctolib';
  listeDocs;
  get;
  constructor(private docteurService : GestionDocteursService){

  }
  ngOnInit(){
    this.get = this.docteurService.getDocs();
    this.get.subscribe((response) => {
      this.listeDocs = response;
    }, (error) => {
      console.log(error);
    })
  }

}

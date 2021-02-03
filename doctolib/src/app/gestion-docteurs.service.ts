import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Docteur} from './modeles/docteur.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestionDocteursService {
  
  constructor(private http : HttpClient) {

  }


  getDocs(){
    let getAllDocs=this.http.get<Docteur[]>("http://localhost:8000/api/docteurs",{
    observe : 'body',
  })
    return getAllDocs;
  }

  getDocsParPatient(id :number){
    let getParPatient = this.http.get<Docteur[]>("http://localhost:8000/api/patients/docteurs/"+id,{
      observe : 'body',
    })
    return getParPatient;
  }

  getOneDocteur(id){
    let getOneDocteur = this.http.get<Docteur>("http://localhost:8000/api/docteurs/"+id,{
      observe : 'body',
    })
      return getOneDocteur;
  }

  deleteOneDocteur(id){
    let deleteOneDocteur = this.http.delete<Docteur[]>("http://localhost:8000/api/docteurs/"+id,{
      observe : 'body',
    })
      return deleteOneDocteur;
  }

  postOneDocteur(docteur){
    
    console.log("je suis dans le service");
    this.http.post<any>( "http://localhost:8000/api/docteurs",{
      numeroOrdre : docteur.numeroOrdre,
      nom : docteur.nom,
      prenom : docteur.prenom,
      adresseTravail: docteur.adresseTravail,
      codePostal : docteur.codePostal,
      ville : docteur.ville,
      email : docteur.email,
      telephone: docteur.telephone,
      lienSiteInternet : docteur.lienSiteInternet,
      specialites : docteur.specialites,
      username : docteur.username,
      password : docteur.password
    },{
      observe : 'response',
    }).subscribe((response)=>{
      console.log(response);
    }, (error) => {
      console.log(error);
    })
      
  }

  putOneDocteur(docteur){
    let putOneDocteur = this.http.put<Docteur>("http://localhost:8000/api/docteurs/"+docteur.id,{
      numeroOrdre : docteur.numeroOrdre,
      nom : docteur.nom,
      prenom : docteur.prenom,
      adresseTravail: docteur.adresseTravail,
      codePostal : docteur.codePostal,
      ville : docteur.ville,
      email : docteur.email,
      telephone: docteur.telephone,
      lienSiteInternet : docteur.lienSiteInternet,
      specialites : docteur.specialites,
      username : docteur.username,
      password : docteur.password
    },{
      observe : 'body',
    })
      return putOneDocteur;
  }

}

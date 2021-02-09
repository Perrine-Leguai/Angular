import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Patient} from './modeles/patient.model';

@Injectable({
  providedIn: 'root'
})
export class GestionPatientsService {

  constructor(private http : HttpClient) { }

  getAllPatientsPseudo(){
    let getAllPatientsPseudo = this.http.get("http://localhost:8000/api/patients/username", {
      observe : 'body',
    })
    return getAllPatientsPseudo;
  }
  getPatientsParDocteur(id :number){
    let getParPatient = this.http.get<Patient[]>("http://localhost:8000/api/docteurs/patients/"+id,{
      observe : 'body',
    })
    return getParPatient;
  }

  getOnePatient(id){
    let getOnePatient = this.http.get<Patient>("http://localhost:8000/api/patients/"+id,{
      observe : 'body',
    })
      return getOnePatient;
  }

  deleteOnePatient(id){
    let deleteOnePatient = this.http.delete<Patient[]>("http://localhost:8000/api/patients/"+id,{
      observe : 'body',
    })
      return deleteOnePatient;
  }

  postOnePatient(patient ){
    console.log('je suis dans le service');
    this.http.post<any>("http://localhost:8000/api/patients",{
      numeroCarteVitale : patient.numeroCarteVitale,
      nom: patient.nom,
      prenom : patient.prenom,
      adresse : patient.adresse,
      codePostal : patient.codePostal,
      ville: patient.ville,
      email: patient.email,
      telephone: patient.telephone,
      username : patient.username,
      password : patient.password
    },{
      observe : 'response',
    }).subscribe((response)=>{
      console.log(response);
    }, error => {
      console.log(error);
    })

  }

  putOnePatient(patient :Patient){
    let putOnePatient = this.http.put<Patient[]>("http://localhost:8000/api/patients/"+patient.id,{
      numeroCarteVitale : patient.numeroCarteVitale,
      nom: patient.nom,
      prenom : patient.prenom,
      adresse : patient.adresse,
      codePostal : patient.codePostal,
      ville: patient.ville,
      email: patient.email,
      telephone: patient.telephone,
      // username : patient.username,
      // password : patient.password
    },{
      observe : 'body',
    })
      return putOnePatient;
  }
}

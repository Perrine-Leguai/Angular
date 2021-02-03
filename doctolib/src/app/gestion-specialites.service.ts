import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Specialite} from './modeles/specialite.model'

@Injectable({
  providedIn: 'root'
})
export class GestionSpecialitesService {

  constructor(private http : HttpClient) { }

  

  getAllSpecialites(){
    let getAllSpe=this.http.get<Specialite[]>("http://localhost:8000/api/specialites",{
    observe : 'body',
  })
    return getAllSpe;
  }

  getDocsBySpecialite(specialite){
    let getDocsBySpe=this.http.get<Specialite[]>("http://localhost:8000/api/specialites/"+specialite,{
    observe : 'body',
  })
    return getDocsBySpe;
  }
}

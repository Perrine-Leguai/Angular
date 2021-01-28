import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Rdv} from './modeles/rdv.model'

@Injectable({
  providedIn: 'root'
})
export class GestionRdvsService {

  constructor(private http : HttpClient) { }

  getRdvsSelonLaPersonneConnectee(id :number, role:string){
    let getRdv = this.http.get<Rdv[]>("http://localhost:8000/api/rdvs/"+id,{
      observe : 'body',
    })
    return getRdv;
  }

  getAllRdvs(){
    let getAllRdvs=this.http.get<Rdv[]>("http://localhost:8000/api/rdvs",{
    observe : 'body',
  })
    return getAllRdvs;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http : HttpClient,
    private SpinnerService:NgxSpinnerService
    ) { }

 authenticate(personne : any){
     // let url = 'http://localhost:8000/api/login_check';
    // //va permettre d'utiliser un objet comme un tableau pour les fonctions telles que for of
    // let body = new URLSearchParams();
    // body.append('username', personne.username);
    // body.append('password', personne.password);

    // this.http.post(url, body.toString()).subscribe((data : Response)=>
    //   data.json();
    // )
  }

  public logout() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('userInfo');
  }



  public login(pseudo, mdp, profilRecupere){
    return  this.http.post("http://localhost:8000/api/login_check", {
      username : pseudo,
      password : mdp,

      //map crée un observable à partir d'un premier obersvable, ici s'il y a une réponse
      // i.e une connexion il va renvoyer les infos de l'utilisateur qui se connecte
    }).pipe(map(response => {
      if (response) {
        this.getUserInfo(pseudo, profilRecupere).subscribe((userInfo) => {
          localStorage.setItem('userInfo', JSON.stringify(userInfo));
          console.log(localStorage);
          this.SpinnerService.hide();
        },(error) => {
          //! SET ALERT DANGER
          this.SpinnerService.hide();
          console.log(error);
        });

        localStorage.setItem('jwt', JSON.stringify(response));
      }
    }));  }

    public getUserInfo(pseudo:string, profilRecup : string) {
      if(profilRecup =="patient"){
        return this.http.get("http://localhost:8000/api/patients/co/" + pseudo, {
        observe : 'body',
      });
      }else if(profilRecup=="docteur"){
        return this.http.get("http://localhost:8000/api/docteurs/co/" + pseudo, {
        observe : 'body',
      });
      }

    }
}

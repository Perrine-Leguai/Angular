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

 

  public logout() {
    localStorage.clear();
  }



  public login(pseudo, mdp, profilRecup){
    return  this.http.post("http://localhost:8000/api/login_check", {
      username : pseudo,
      password : mdp,

      //map crée un observable à partir d'un premier obersvable, ici s'il y a une réponse
      // i.e une connexion il va renvoyer les infos de l'utilisateur qui se connecte
    });
    
    // .pipe(map(response => {
    //   if (response) {
    //     this.getUserInfo(pseudo, profilRecup).subscribe((userInfo) => {
    //       localStorage.setItem('userInfo', JSON.stringify(userInfo));
    //       localStorage.setItem('jwt', JSON.stringify(response));
    //       console.log('apres le jwt ' + localStorage.getItem('jwt'));
    //       console.log(localStorage.get('profilRecupere') + ' localstrogae global');

    //       this.SpinnerService.hide();
    //     },(error) => {
    //       //! SET ALERT DANGER
    //       this.SpinnerService.hide();
    //       console.log(error);
    //     });

        
      //}
    // }));  
  }

    public getUserInfo(pseudo:string, profilRecup : string) {
      if(profilRecup =="patient"){
        console.log('je suis dans GetUser')
        localStorage.setItem('profilRecupere', profilRecup)
        return this.http.get("http://localhost:8000/api/patients/co/" + pseudo, {
        observe : 'body',
      });
      }else if(profilRecup=="docteur"){
        localStorage.setItem('profilRecupere', profilRecup)
        return this.http.get("http://localhost:8000/api/docteurs/co/" + pseudo, {
        observe : 'body',
      });
      }

    }
}

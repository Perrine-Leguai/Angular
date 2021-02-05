import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  constructor(private http : HttpClient
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

// logout(){
//   localStorage.removeItem('id_token');
// }

//   loggedIn(){
//     return tokenGetter();
//   }
}

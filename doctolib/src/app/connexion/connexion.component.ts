import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from '../authentication-service.service';
import { GestionDocteursService } from '../gestion-docteurs.service';
import { GestionPatientsService } from '../gestion-patients.service';
import { Docteur } from '../modeles/docteur.model';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  profilRecupere: string;
  get: any;
  listePersonne: any[];
  ok: boolean=false;

   //pvariable pour la connexion :
   loginForm;
   error :string ="";

   //point pédagogie :
   //le constructeur est appelé dès qu'on isntance la classe
  constructor(
    private docteurService: GestionDocteursService,
    private patientService: GestionPatientsService,
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService : AuthenticationServiceService,
  ) { 
    this.loginForm = formBuilder.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  //voir si le pseudo est bien dans la base de données
  testPseudo(event : Event){
  if(this.profilRecupere=="docteur"){
    this.get = this.docteurService.getDocs();
    this.get.subscribe((response)=>{
      this.listePersonne= response;
      for(var personne of this.listePersonne){
        if(personne.username == (<HTMLInputElement>event.target).value){
          //fait apparaitre le message de bienvenue si le pseudo y est
          this.ok = true;
          console.log(this.ok);
          break;
        }else if(personne.username != (<HTMLInputElement>event.target).value) {
          this.ok = false
        };
      }
    })
  
    

  }else if(this.profilRecupere=="patient"){
    // this.get = this.patientService.getDocs();
    // this.get.subscribe((response)=>{
    //   this.listePersonne= response;
    //   for(var personne of this.listePersonne){
    //     if(personne.username == (<HTMLInputElement>event.target).value){
    //       //fait apparaitre le message de bienvenue si le pseudo y est
    //       this.ok = true;
    //       console.log(this.ok);
    //       break;
    //     }else if(personne.username != (<HTMLInputElement>event.target).value) {
    //       this.ok = false
    //     };
    //   }
    // })
  }
  }

  recupProfil(event : Event){
    this.profilRecupere = (<HTMLInputElement>event.target).value
  }

   onSubmit(){
     console.log('ici le submit')
  //   this.authenticationService
  //       .authenticate(this.loginForm.value)
  //       .subscribe(data =>{
  //         localStorage.setItem('id_token', data.token);
  //         this.router.navigate(['post']);
  //       },
  //       error => this.error = error.message);
   }

  logout(){

  }
}

//MODULES
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule, Routes } from '@angular/router';
import {NgxSpinnerModule} from 'ngx-spinner';


//SERVICES
import { GestionRdvsService } from './gestion-rdvs.service';
import { GestionDocteursService } from './gestion-docteurs.service';
import { GestionPatientsService } from './gestion-patients.service';
import { GestionSpecialitesService } from './gestion-specialites.service';
import { AuthenticationService } from './authentication.service';

//COMPONENTS
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { InfosGeneralesComponent } from './infos-generales/infos-generales.component';
import { RdvPatientComponent } from './rdv-patient/rdv-patient.component';
import { RdvDocteurComponent } from './rdv-docteur/rdv-docteur.component';
import { PriseRdvComponent } from './prise-rdv/prise-rdv.component';
import { HistoriqueRdvsComponent } from './historique-rdvs/historique-rdvs.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { HorsCoComponent } from './hors-co/hors-co.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CoComponent } from './co/co.component';
import { AffichageComponent } from './infos-generales/affichage/affichage.component';
import { ModificationComponent } from './infos-generales/modification/modification.component';

//GESTION DU JWT
import {JwtInterceptor} from './_jwtInterceptor/jwtInterceptor.interceptor'

const ROUTES: Routes =[
  {path: "", component: HorsCoComponent,
    children :[ {path : "", component: AccueilComponent},
                {path : "connexion", component: ConnexionComponent},
                {path : "inscription", component: InscriptionComponent},
                {path: "404", component : NotFoundComponent}]},

  {path: "bienvenue", component: CoComponent,
    children :[{path : "infos", component: InfosGeneralesComponent,
                  children : [{path:"", component: AffichageComponent},
                              {path: "modification", component: ModificationComponent}]},
                {path : "rdv", component: PriseRdvComponent},
                {path : "historique", component: HistoriqueRdvsComponent}]},


  {path: '**', redirectTo:'/404'}


]
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    InfosGeneralesComponent,
    RdvPatientComponent,
    RdvDocteurComponent,
    PriseRdvComponent,
    HistoriqueRdvsComponent,
    AccueilComponent,
    ConnexionComponent,
    HorsCoComponent,
    InscriptionComponent,
    NotFoundComponent,
    CoComponent,
    AffichageComponent,
    ModificationComponent,


  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES, {onSameUrlNavigation: 'reload'}),
    NgxSpinnerModule,
    ReactiveFormsModule,

  ],
  exports:[RouterModule],
  providers: [
    GestionRdvsService, 
    GestionDocteursService, 
    GestionPatientsService, 
    GestionSpecialitesService, 
    AuthenticationService,
    { provide: HTTP_INTERCEPTORS, useClass : JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}

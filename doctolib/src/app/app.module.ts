import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { InfosGeneralesComponent } from './infos-generales/infos-generales.component';
import { RdvPatientComponent } from './rdv-patient/rdv-patient.component';
import { RdvDocteurComponent } from './rdv-docteur/rdv-docteur.component';
import { HttpClientModule } from '@angular/common/http';
import { PriseRdvComponent } from './prise-rdv/prise-rdv.component';
import { GestionRdvsService } from './gestion-rdvs.service';
import { GestionDocteursService } from './gestion-docteurs.service';
import { GestionPatientsService } from './gestion-patients.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HistoriqueRdvsComponent } from './historique-rdvs/historique-rdvs.component';
import { AccueilComponent } from './accueil/accueil.component';
import {RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { HorsCoComponent } from './hors-co/hors-co.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CoComponent } from './co/co.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import { AffichageComponent } from './infos-generales/affichage/affichage.component';
import { ModificationComponent } from './infos-generales/modification/modification.component';
import { GestionSpecialitesService } from './gestion-specialites.service';


const ROUTES: Routes =[
  {path: "", component: HorsCoComponent,
    children :[ {path : "", component: AccueilComponent},
                {path : "connexion", component: ConnexionComponent},
                {path : "inscription", component: InscriptionComponent},
                {path: "404", component : NotFoundComponent}]},

  {path: "bienvenue", component: CoComponent,
    children :[ {path : "", component: InfosGeneralesComponent,
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
    RouterModule.forRoot(ROUTES),
    NgxSpinnerModule,
    ReactiveFormsModule
  ],
  providers: [GestionRdvsService, GestionDocteursService, GestionPatientsService, GestionSpecialitesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

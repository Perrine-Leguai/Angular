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
import { FormsModule } from '@angular/forms';
import { HistoriqueRdvsComponent } from './historique-rdvs/historique-rdvs.component';
import { AccueilComponent } from './accueil/accueil.component';
import {RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { HorsCoComponent } from './hors-co/hors-co.component';
import { InscriptionComponent } from './inscription/inscription.component';

const ROUTES: Routes =[
  {path: "", component: HorsCoComponent,
    children :[ {path : "", component: AccueilComponent},
                {path : "connexion", component: ConnexionComponent},
                {path : "inscription", component: InscriptionComponent}]}
  
  
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
    InscriptionComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),

  ],
  providers: [GestionRdvsService, GestionDocteursService, GestionPatientsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

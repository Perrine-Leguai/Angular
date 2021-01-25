import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AjouterVoitureComponent } from './ajouter-voiture/ajouter-voiture.component';
import { DetailsComponent } from './details/details.component';
import { ListeVoituresComponent } from './liste-voitures/liste-voitures.component';
import { VoitureComponent } from './voiture/voiture.component';
import { GestionVoitureService } from './gestion-voiture.service';

@NgModule({
  declarations: [
    AppComponent,
    AjouterVoitureComponent,
    DetailsComponent,
    ListeVoituresComponent,
    VoitureComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [GestionVoitureService],
  bootstrap: [AppComponent]
})
export class AppModule { }

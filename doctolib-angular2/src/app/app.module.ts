import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { VoituresComponent } from './voitures/voitures.component';
import { DetailsComponent } from './details/details.component';
import { VoitureComponent } from './voiture/voiture.component';
import { AjouterVoitureComponent } from './ajouter-voiture/ajouter-voiture.component';
import { ListeVoitureComponent } from './liste-voiture/liste-voiture.component';
import { HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    VoituresComponent,
    DetailsComponent,
    VoitureComponent,
    AjouterVoitureComponent,
    ListeVoitureComponent,
  ],
  imports: [
    BrowserModule,
    NgModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

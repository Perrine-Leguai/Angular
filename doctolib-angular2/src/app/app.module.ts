import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VoituresComponent } from './voitures/voitures.component';
import { DetailsComponent } from './details/details.component';
import { VoitureComponent } from './voitures/voiture/voiture.component';

@NgModule({
  declarations: [
    AppComponent,
    VoituresComponent,
    DetailsComponent,
    VoitureComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

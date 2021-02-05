import { Component, Directive, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ColorfullyDirective} from './colorfully.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  // @ViewChild('subscriptionForm') monFormulaire;
  title = 'test-angular';
  detailsVoiture = "";
  hoverIndex = "";
  username :string;
  email :string;

  onReceivedDetails(details){
    this.detailsVoiture=details;

  }
  enter($event) {
    this.hoverIndex = 'i';
}

leave($event) {
    this.hoverIndex = null;
}

inscription(form: NgForm){
  console.log(form);
}
}

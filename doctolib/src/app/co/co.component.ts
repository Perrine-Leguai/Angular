import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-co',
  templateUrl: './co.component.html',
  styleUrls: ['./co.component.css']
})
export class CoComponent implements OnInit {
  localStorage;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    
    if (localStorage == null) {
      
      this.router.navigate(['/']);
    }
  }

}

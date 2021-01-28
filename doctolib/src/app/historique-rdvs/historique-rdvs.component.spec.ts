import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueRdvsComponent } from './historique-rdvs.component';

describe('HistoriqueRdvsComponent', () => {
  let component: HistoriqueRdvsComponent;
  let fixture: ComponentFixture<HistoriqueRdvsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriqueRdvsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriqueRdvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

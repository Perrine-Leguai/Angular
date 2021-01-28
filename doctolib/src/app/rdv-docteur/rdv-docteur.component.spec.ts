import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdvDocteurComponent } from './rdv-docteur.component';

describe('RdvDocteurComponent', () => {
  let component: RdvDocteurComponent;
  let fixture: ComponentFixture<RdvDocteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdvDocteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdvDocteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

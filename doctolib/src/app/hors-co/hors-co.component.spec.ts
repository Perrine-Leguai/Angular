import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorsCoComponent } from './hors-co.component';

describe('HorsCoComponent', () => {
  let component: HorsCoComponent;
  let fixture: ComponentFixture<HorsCoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorsCoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorsCoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

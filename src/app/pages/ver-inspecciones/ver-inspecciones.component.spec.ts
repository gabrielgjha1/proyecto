import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerInspeccionesComponent } from './ver-inspecciones.component';

describe('VerInspeccionesComponent', () => {
  let component: VerInspeccionesComponent;
  let fixture: ComponentFixture<VerInspeccionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerInspeccionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerInspeccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

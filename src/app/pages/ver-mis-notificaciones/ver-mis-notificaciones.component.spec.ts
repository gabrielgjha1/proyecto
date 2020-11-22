import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerMisNOtificacionesComponent } from './ver-mis-notificaciones.component';

describe('VerMisNOtificacionesComponent', () => {
  let component: VerMisNOtificacionesComponent;
  let fixture: ComponentFixture<VerMisNOtificacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerMisNOtificacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerMisNOtificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

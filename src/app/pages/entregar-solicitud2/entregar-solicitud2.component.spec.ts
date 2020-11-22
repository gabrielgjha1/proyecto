import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregarSolicitud2Component } from './entregar-solicitud2.component';

describe('EntregarSolicitud2Component', () => {
  let component: EntregarSolicitud2Component;
  let fixture: ComponentFixture<EntregarSolicitud2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntregarSolicitud2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntregarSolicitud2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregarSolicitud1Component } from './entregar-solicitud1.component';

describe('EntregarSolicitud1Component', () => {
  let component: EntregarSolicitud1Component;
  let fixture: ComponentFixture<EntregarSolicitud1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntregarSolicitud1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntregarSolicitud1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

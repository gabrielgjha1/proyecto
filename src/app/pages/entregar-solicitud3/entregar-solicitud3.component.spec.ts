import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregarSolicitud3Component } from './entregar-solicitud3.component';

describe('EntregarSolicitud3Component', () => {
  let component: EntregarSolicitud3Component;
  let fixture: ComponentFixture<EntregarSolicitud3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntregarSolicitud3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntregarSolicitud3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

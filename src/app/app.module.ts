import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { EntregarSolicitud1Component } from './pages/entregar-solicitud1/entregar-solicitud1.component';
import { EntregarSolicitud2Component } from './pages/entregar-solicitud2/entregar-solicitud2.component';
import { EntregarSolicitud3Component } from './pages/entregar-solicitud3/entregar-solicitud3.component';
import { VerMisNOtificacionesComponent } from './pages/ver-mis-notificaciones/ver-mis-notificaciones.component';
import { VerSolicitudesComponent } from './pages/ver-solicitudes/ver-solicitudes.component';
import { VerInspeccionesComponent } from './pages/ver-inspecciones/ver-inspecciones.component';
import { EstadisticasComponent } from './pages/estadisticas/estadisticas.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CuentasComponent } from './pages/cuentas/cuentas.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    EntregarSolicitud1Component,
    EntregarSolicitud2Component,
    EntregarSolicitud3Component,
    VerMisNOtificacionesComponent,
    VerSolicitudesComponent,
    VerInspeccionesComponent,
    EstadisticasComponent,
    LoginComponent,
    RegistroComponent,
    HeaderComponent,
    FooterComponent,
    CuentasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

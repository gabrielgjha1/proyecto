import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { CuentasComponent } from './pages/cuentas/cuentas.component';
import { EntregarSolicitud1Component } from './pages/entregar-solicitud1/entregar-solicitud1.component';
import { EntregarSolicitud2Component } from './pages/entregar-solicitud2/entregar-solicitud2.component';
import { EntregarSolicitud3Component } from './pages/entregar-solicitud3/entregar-solicitud3.component';
import { EstadisticasComponent } from './pages/estadisticas/estadisticas.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { VerInspeccionesComponent } from './pages/ver-inspecciones/ver-inspecciones.component';
import { VerMisNOtificacionesComponent } from './pages/ver-mis-notificaciones/ver-mis-notificaciones.component';
import { VerSolicitudesComponent } from './pages/ver-solicitudes/ver-solicitudes.component';


const routes: Routes = [


  {path:'',component:InicioComponent},
{path:'inicio',component:InicioComponent},
{path:'solicitud',component:EntregarSolicitud1Component},
{path:'estadoSolicitud',component:VerMisNOtificacionesComponent},
{path:'estadisticas',component:EstadisticasComponent},
{path:'verInspecciones',component:VerInspeccionesComponent},
{path:'verSolicitudes',component:VerSolicitudesComponent},
{path:'login',component:LoginComponent},
{path:'cuentas',component:CuentasComponent},






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

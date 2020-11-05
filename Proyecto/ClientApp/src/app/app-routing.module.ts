import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AsignaturaRegisterComponent } from './Registrar/Asignaturas/asignatura-register/asignatura-register.component';
import { DocenteRegisterComponent } from './Registrar/Docentes/docente-register/docente-register.component';
import { ProductosRegisterComponent } from './Productos/productos-register/productos-register.component';
import { ProductosConsultaComponent } from './Productos/productos-consulta/productos-consulta.component';
import { SolicitarComponent } from './Solicitudes/solicitar/solicitar.component';
import { SolicitudesComponent } from './Solicitudes/solicitudes/solicitudes.component';

const routes:Routes = [
  {
    path:'asignaturasAdd',
    component:AsignaturaRegisterComponent
  },
  {
    path:'docentesAdd',
    component:DocenteRegisterComponent
  },
  {
    path:'productosAdd',
    component:ProductosRegisterComponent
  },
  {
    path:'productosList',
    component:ProductosConsultaComponent
  },
  {
    path:'solicitar',
    component:SolicitarComponent
  },
  {
    path:'solicitudes',
    component:SolicitudesComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }

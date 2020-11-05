import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { HeadersComponent } from './Components/headers/headers.component';
import { MenuComponent } from './Components/menu/menu.component';
import { ContentComponent } from './Components/content/content.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { AsignaturaRegisterComponent } from './Registrar/Asignaturas/asignatura-register/asignatura-register.component';
import { DocenteRegisterComponent } from './Registrar/Docentes/docente-register/docente-register.component';
import { ProductosRegisterComponent } from './Productos/productos-register/productos-register.component';
import { ProductosConsultaComponent } from './Productos/productos-consulta/productos-consulta.component';
import { SolicitarComponent } from './Solicitudes/solicitar/solicitar.component';
import { SolicitudesComponent } from './Solicitudes/solicitudes/solicitudes.component';
import { FiltroAsignaturaPipe } from './pipe/filtro-asignatura.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    HeadersComponent,
    MenuComponent,
    ContentComponent,
    FooterComponent,
    AsignaturaRegisterComponent,
    DocenteRegisterComponent,
    ProductosRegisterComponent,
    ProductosConsultaComponent,
    SolicitarComponent,
    SolicitudesComponent,
    FiltroAsignaturaPipe
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

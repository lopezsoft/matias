
import { Routes, RouterModule } from '@angular/router';
import { PlanesComponent } from './planes/planes.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { CaracteristicasComponent } from './caracteristicas/caracteristicas.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';

export const routes: Routes = [
  { path: 'planes', component: PlanesComponent },
  { path: 'caracteristicas', component: CaracteristicasComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: '**' , pathMatch: 'full' , redirectTo : '' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

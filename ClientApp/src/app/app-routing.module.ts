import {RegistroComponent } from './credito/registro/registro.component';
import {ConsultaComponent } from './credito/consulta/consulta.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [

  {
  path:'Consulta',
  component:  ConsultaComponent 
  },
  {
    path: 'Registro',
    component:  RegistroComponent
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }

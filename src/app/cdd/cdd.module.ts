import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../app-compartilhado/app-material/app-material.module';
import { AppCompartilhadoModule } from './../app-compartilhado/app-compartilhado.module';
import { CddRoutingModule } from './cdd-routing.module';
import { ClassesComponent } from './classes/classes.component';


@NgModule({
  //Tudo que está dentro dele
  declarations: [
    ClassesComponent
  ],
  //Tudo que não está dentro dele
  imports: [
    CommonModule,//importado em todos os módulos exceto no principal
    CddRoutingModule,
    AppMaterialModule,
    AppCompartilhadoModule,
  ]
})
export class CddModule { }

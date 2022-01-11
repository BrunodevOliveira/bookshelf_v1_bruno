import { AppMaterialModule } from './../compartilhado/app-material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { CddRoutingModule } from './cdd-routing.module';
import { ClassesComponent } from './classes/classes.component';

@NgModule({
  //Tudo que está dentro dele
  declarations: [
    ClassesComponent
  ],
  //Tudo que não está dentro dele
  imports: [
    CommonModule,
    CddRoutingModule,
    AppMaterialModule
  ]
})
export class CddModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

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
    MatTableModule
  ]
})
export class CddModule { }

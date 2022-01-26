import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppDialogosComponent } from './app-dialogos/app-dialogos.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { PipesPipe } from './app-pipes/pipes.pipe';

@NgModule({

  //O que vou usar aqui
  declarations: [
    AppDialogosComponent,
    PipesPipe,
  ],
  //O que vem para dentro do meu módulo
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  //O que eu vou usar fora
  exports: [
    //propriedade que define quais itens (componentes, diretivas e pipes) serão visíveis por outros módulos quando este for importado
    //Geralmente só é criado quando o módulo foi criado para ser utilizado em outros
    AppDialogosComponent,
    PipesPipe
  ]
})
export class AppCompartilhadoModule { }

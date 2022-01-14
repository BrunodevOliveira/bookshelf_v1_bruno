import { AppDialogosComponent } from './../../app-compartilhado/app-dialogos/app-dialogos.component';
import { GenerosService } from './../service/generos.service';
import { Generos } from './../modelos/generos';
import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  //Olha o que foi trazido no pacote HTML e observa se esses dados cabem na interface Generos
  //Esse $ serve para identificar que é um observable
  livrosGeneros$: Observable <Generos []>
  visaoColunas= ['_idGenero','nomeGenero', 'decimalGenero']

  constructor(private generosService: GenerosService, public dialogo:MatDialog ) {
    this.livrosGeneros$ = generosService.listagemGeneros()
      .pipe(
        catchError(error => {
          this.abrirDialogoErro('Erro ao carregar a tabela: #BS - ' +error.status)
          return of([]) //caminho alternativo caso n consiga carregar a página
        })
      )

  }

  abrirDialogoErro(errMsg: string) {
    this.dialogo.open(AppDialogosComponent, {
      data:errMsg
    })
  }

  ngOnInit(): void {
  }

}

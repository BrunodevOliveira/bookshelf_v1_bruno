import { AppDialogosComponent } from './../../app-compartilhado/app-dialogos/app-dialogos.component';
import { GenerosService } from './../service/generos.service';
import { Generos } from './../modelos/generos';
import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { catchError, debounceTime, distinctUntilChanged, filter, fromEvent, Observable, of, tap } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit, AfterViewInit {

  //Olha o que foi trazido no pacote HTML e observa se esses dados cabem na interface Generos
  //Esse $ serve para identificar que é um observable
  livrosGeneros$: Observable <Generos []>
  visaoColunas= ['_idGenero','nomeGenero', 'decimalGenero']
  formulario!: FormGroup
  result$?: Observable<Generos[]>

  //Importo o MAtDialog para utilizar os métodos dele e abrir o dialogo criado em app-dialogos.component.ts
  constructor(private generosService: GenerosService, public dialogo:MatDialog ) {
    this.livrosGeneros$ = generosService.listagemGeneros()
      .pipe(
        //Esse método pega o erro que é exibido no console e retorna uma interface vazia "of([])"
        catchError(error => {
          this.abrirDialogoErro('Erro ao carregar a tabela: #BS - ' +error.status)
          //passo como parâmetro da função acima uma msg de erro concatenado com o número do erro
          return of([])
        })
      )

  }

  @ViewChild('searchInput') searchInput!: ElementRef

  ngAfterViewInit(): void {
    fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
      filter(Boolean),
      debounceTime(400),
      distinctUntilChanged(),
      tap(() => {
        const query = this.searchInput.nativeElement.value
        // console.log(query)
        if(query) {
          this.result$ = this.generosService.pesquisar(query)
          // console.log(this.result$)
        } else {
          this.result$ = undefined
        }
      })
    ).subscribe()
  }

  //Utilizo o método open() importado de Matdialog e passo como parâmetro o componente em que esse dialogo está sendo utilizado. Em seguida passo um objeto com a propriedade [data] que terá receber a msg passada no parêmetro da função abrirDialogoErro()
  abrirDialogoErro(errMsg: string) {
    this.dialogo.open(AppDialogosComponent, {
      data:errMsg
      //data recebe o conteúdo passado por errMsg e esse conteúdo será exibido no binding {{conteudo}} em app-dialogos
    })
  }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      genero: new FormControl('')
    })
  }

}

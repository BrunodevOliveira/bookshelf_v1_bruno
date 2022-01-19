import { AppLoginComponent } from './../app-login/app-login.component';
import { NavegacaoService } from './../servicosInterface/navegacao.service';
import { MenuNavegador } from './../modelosInterface/menu-navegador';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, catchError, of } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.scss']
})
export class NavegacaoComponent {

  //itens do menu principal
  tituloNav = 'BookShelf'
  usuario = {userName: 'Bruno Oliveira', icone: 'remember_me'}

  //itens da barra superior
  tituloBarra = '[Sua Estante Virtual]'

  //itens de icones e imagens de navegação
  iconeGeral = '../../assets/imagens/ShelfBook.png'
  lIcone = 80
  aIcone= 80

  //Controle das rotas do menu.
  itensMenu$: Observable <MenuNavegador []>


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );


  constructor(
    private breakpointObserver: BreakpointObserver,
    private navegadorService: NavegacaoService,
    private  telaLogin:MatDialog
    ) {
      this.itensMenu$ = navegadorService.listagemMenu()
      .pipe(
        //Pega o erro que aparecer no navegador
        catchError(error => {
          return of([])
        })
      )
  }

  abrirLogin(erroMsg: string) {
    this.telaLogin.open(AppLoginComponent, {
      data:erroMsg
    })
  }

}

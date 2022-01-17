import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

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
  //Controle das rotas do menu. Será gerado utilizando *ngFor
  itensMenu = [
    {linkMenu: '/cdd', labelMenu:'Classificação Dewey', hab:true},
    {linkMenu: '/fee', labelMenu:'Feed Noticias', hab:true},
    {linkMenu: '/clube', labelMenu:'Pagina Usuário', hab:true},
    {linkMenu: '/leitura', labelMenu:'Clubes de leitura', hab:true},
    {linkMenu: '/estante', labelMenu:'Estante Particular', hab:true},
  ]

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}

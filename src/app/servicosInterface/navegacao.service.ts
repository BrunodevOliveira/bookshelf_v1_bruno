import { MenuNavegador } from './../modelosInterface/menu-navegador';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavegacaoService {

  private readonly uriAPI = '../../assets/menuNavegador.json'

  constructor(private menuDados: HttpClient) { }

  listagemMenu() {
    //pego o constructor > pego os dados e padronizo ele de acordo com minha interface que criei para esses dados utilizando o operador diamante > passo o EndPoint que ele vai utilizar(uriAPI)
    return this.menuDados.get<MenuNavegador[]>(this.uriAPI)
    .pipe (
      first(),// para não repetir a busca! Retorna somente uma vez os dados
      tap(apiMenu => console.log(apiMenu)) //para o retorno não ser entrgue como uma observable
    )
  }
}

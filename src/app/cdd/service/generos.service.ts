import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

import { Generos } from './../modelos/generos';

@Injectable({
  providedIn: 'root' //em quem está sendo injetado essas informações. Como está em root, todos os módulos poderam acessar esse serviço
})
export class GenerosService {

  private readonly urlAPI = '/assets/generos.json' //EndPoint

  constructor(private clienteDados: HttpClient) { }

  listagemGeneros() {
    return this.clienteDados.get<Generos[]>(this.urlAPI) //Ele vai buscar na variável urlAPI o JSON com as informações e vai verificar se esses dados se encaixam na interface Generos
    //Antes de entregar esses dados, daremos os seguintes tratamentos:
    .pipe(
      delay(500),
      first(),//traz o primeiro resultado a execução do método. Somente pega novamente os dados do EndPoint caso tenha um carregamento do método listagemGeneros. Isso ajuda na demanda para que n fique atualizando a cada mudança feita no EndPoint
      tap()
      //pega o observable(JSON) e descontroi ele para que se adeque somente a minha interface Generos e não tenha mais os métodos do RXJS em seu prototype
    )
  }
}

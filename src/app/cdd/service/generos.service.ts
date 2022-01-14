import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

import { Generos } from './../modelos/generos';

@Injectable({
  providedIn: 'root' //em quem está sendo injetado essas informações. Como está em root, todos os módulos poderam acessar esse serviço
})
export class GenerosService {

  private readonly urlAPI = '/assets/generos.json'

  constructor(private clienteDados: HttpClient) { }

  listagemGeneros() {
    return this.clienteDados.get<Generos[]>(this.urlAPI) //Ele vai buscar na variável urlAPI o JSON com as informações e vai verificar se esses dados se encaixam na interface Generos
    .pipe(
      delay(500),
      first(),
      tap()
      //pega o observable(JSON) e edita esses dados conforme definimos na Interface Generos
    )
  }
}

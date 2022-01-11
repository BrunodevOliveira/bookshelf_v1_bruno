import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //em quem está sendo injetado essas informações. Como está em root, todos os módulos poderam acessar esse serviço
})
export class GenerosService {

  private readonly urlAPI = '/assets/generos.json'

  constructor() { }
}

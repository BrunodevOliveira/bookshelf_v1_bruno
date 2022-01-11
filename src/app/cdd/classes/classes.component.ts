import { Generos } from './../modelos/generos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  //em Angular precisamos inicializar  sempre se não gera erro:
  livrosGeneros: Generos[] = []
  visaoColunas= ['_idGenero','nomeGenero', 'decimalGenero']

  constructor() { }

  ngOnInit(): void {
  }

}

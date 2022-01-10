import { Generos } from './../modelos/generos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  //em Angular precisamos inicializar  sempre se não gera erro:
  livrosGeneros: Generos[] = [
    {_idGenero: "0", nomeGenero: "Generalidades", decimalGenero: '00', livrosGenero: 150},
    {_idGenero: "1", nomeGenero: "Filosofia e Psicologia", decimalGenero: '00', livrosGenero: 105},
    {_idGenero: "2", nomeGenero: "Religião", decimalGenero: '00', livrosGenero: 366},
    {_idGenero: "3", nomeGenero: "Ciências Socias", decimalGenero: '00', livrosGenero: 203},
    {_idGenero: "4", nomeGenero: "Línguas", decimalGenero: '00', livrosGenero: 123},
    {_idGenero: "5", nomeGenero: "Ciências Naturais e Matemática", decimalGenero: '00', livrosGenero: 532},
    {_idGenero: "6", nomeGenero: "Tecnologia e Ciências Aplicadas", decimalGenero: '00', livrosGenero: 325},
    {_idGenero: "7", nomeGenero: "Artes", decimalGenero: '00', livrosGenero: 144},
    {_idGenero: "8", nomeGenero: "Literatura e Retórica", decimalGenero: '00', livrosGenero: 115},
    {_idGenero: "9", nomeGenero: "Geografia História e Biografia", decimalGenero: '00', livrosGenero: 211},
  ]
  visaoColunas= ['_idGenero','nomeGenero', 'decimalGenero']
  constructor() { }

  ngOnInit(): void {
  }

}

import { GenerosService } from './../service/generos.service';
import { Generos } from './../modelos/generos';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  //Olha o que foi trazido no pacote HTML e observa se esses dados cabem na interface Generos
  livrosGeneros: Observable <Generos []>
  visaoColunas= ['_idGenero','nomeGenero', 'decimalGenero']

  constructor(private GenerosService: GenerosService) {
    this.livrosGeneros = GenerosService.listagemGeneros()
   }

  ngOnInit(): void {
  }

}

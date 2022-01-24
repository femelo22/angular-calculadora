import { Component, OnInit } from '@angular/core';

import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  //injeção de dependencias (injetando o serviço de calculadora)
  constructor(private calculadoraService: CalculadoraService) { }

  ngOnInit(): void {
    
  }

}

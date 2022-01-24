/**
 * Serviço responsavel por executar nossas operações basicas da calcualdora
 * @author Luiz Fernando M Gonçalves =)
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  constructor() { }

  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';


  /**
   * 
   * @param num1 number Primeiro parametro
   * @param num2 number Segundo parametro
   * @param operacao string Tipo da operação
   * @returns number Resultado da operação
   */
  calcular(num1: number, num2: number, operacao: string): number {
    let resultado: number; // o escopo da variavel com LET é local

    switch (operacao) {
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
        break;
      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
        break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
        break;
      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
        break
      default:
        resultado = 0;
    }
    return resultado
  }



}

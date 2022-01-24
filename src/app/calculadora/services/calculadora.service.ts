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

  static readonly SOMAR: string = '+';
  static readonly SUBTRAIR: string = '-';
  static readonly DIVIDIR: string = '/';
  static readonly MULTIPLICAR: string = '*';


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
      case CalculadoraService.SOMAR:
        resultado = num1 + num2;
        break;
      case CalculadoraService.SUBTRAIR:
        resultado = num1 - num2;
        break;
      case CalculadoraService.DIVIDIR:
        resultado = num1 / num2;
        break;
      case CalculadoraService.MULTIPLICAR:
        resultado = num1 * num2;
        break
      default:
        resultado = 0;
    }
    return resultado
  }



}

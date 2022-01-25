import { Component, OnInit } from '@angular/core';

import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  private numero1: string;
  private numero2: string;
  private resultado: number;
  private operacao: string;

  //injeção de dependencias (injetando o serviço de calculadora)
  constructor(private calculadoraService: CalculadoraService) { }

  ngOnInit(): void {
    this.limpar();
  }

  /**
   * Inicializar todos os operadores para valoers padrão
   * @return void
   */
  limpar(): void {
    this.numero1 = '0';
    this.numero2 = null;
    this.resultado = null;
    this.operacao = null;
  }

  /**
   * Adiciona o número selecionado para o cálculo posteriormente
   * 
   * @param string numero 
   * @return void
   */
  adicionarNumero(numero: string): void {
    if (this.operacao === null) {
      this.numero1 = this.concatenarNumero(this.numero1, numero);
    } else {
      this.numero2 = this.concatenarNumero(this.numero2, numero);
    }
  }


  /**
   * Retorna o valor concatenado. Trata o separador decimal
   * 
   * @param numAtual 
   * @param numConcat 
   * @return string
   */
  concatenarNumero(numAtual: string, numConcat: string): string {
    if (numAtual === '0' || numAtual === null) {
      numAtual = '';
    }

    if (numConcat === '0' || numConcat === null) {
      numConcat = '';
    }

    if (numConcat === '.' && numAtual.indexOf('.') > -1) {
      return numAtual;
    }

    return numAtual + numConcat
  }


  /**
   * 
   * @param string operacao 
   * @return void
   */
  definirOperacao(operacao: string): void {
    if (operacao === null) {
      this.operacao = operacao;
      return;
    }
    if (this.numero2 !== null) {
      this.resultado = this.calculadoraService.calcular(
        parseFloat(this.numero1),
        parseFloat(this.numero2),
        this.operacao
      );
      this.operacao = operacao;
      this.numero1 = this.resultado.toString();
      this.numero2 = null;
      this.resultado = null;
    }
  }

  /**
   * Realiza o calculo
   * @return void
   */
  calcular(): void {
    if (this.numero2 === null) {
      return;
    }
    this.resultado = this.calculadoraService.calcular(parseFloat(this.numero1), parseFloat(this.numero2), this.operacao);
  }


  /**
   * Retorna o valor que será exibido na tela da calculadora
   * @return string
   */
  get display(): string { // "GET" é um recurso do typescript, que vai gerar um atributo de classe chamado "display"
    if(this.resultado !== null) {
      return this.resultado.toString();
    }
    if(this.numero2 !== null){
      return this.numero2;
    }
    return this.numero1;
  }






}

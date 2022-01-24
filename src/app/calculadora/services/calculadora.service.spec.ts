import { inject, TestBed } from '@angular/core/testing';
import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('deve garantir que 1 + 4 = 5',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let resultado = service.calcular(1, 4, CalculadoraService.SOMAR);
      expect(resultado).toEqual(5);
    })
  );

  it('deve garantir que 1 - 4 = -3', 
    inject([CalculadoraService], (service: CalculadoraService) => {
      let resultado = service.calcular(1, 4, CalculadoraService.SUBTRAIR);
      expect(resultado).toEqual(-3);
    })
  );

  it('deve garantir que 1 / 4 = 0.25',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let resultado = service.calcular(1, 4, CalculadoraService.DIVIDIR);
      expect(resultado).toEqual(0.25);
    })
  );

  it('deve garantir que 1 * 4 = 4',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let resultado = service.calcular(1, 4, CalculadoraService.MULTIPLICAR)
      expect(resultado).toEqual(4);
    })
    
  ); 

  it('deve retornar 0 para operacao invalida', 
    inject([CalculadoraService], (service: CalculadoraService) => {
      let resultado = service.calcular(1, 4, '%');
      expect(resultado).toEqual(0);
    })
  );
});

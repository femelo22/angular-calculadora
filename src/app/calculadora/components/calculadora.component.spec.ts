import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraComponent } from './calculadora.component';
import { CalculadoraService } from '../services';
import { By } from '@angular/platform-browser';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoraComponent ],
      providers: [
        CalculadoraService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


 /* it('deve garantir que 1 + 2 = 3', () => {
    let btn1 = fixture.debugElement.query(By.css('#btn1'));
    let btn2 = fixture.debugElement.query(By.css('#btn3'));
    let btnSoma = fixture.debugElement.query(By.css('#btnSoma'));
    let btnCalcular = fixture.debugElement.query(By.css('#btnCalcular'));
    let display = fixture.debugElement.query(By.css('#display'));

    btn1.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnSoma.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn2.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnCalcular.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(display.nativeElement.value).toEqual('3')
  }); */

});

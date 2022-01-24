import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './components';
import { CalculadoraService } from './services';



@NgModule({
  declarations: [
    CalculadoraComponent
  ],
  exports: [
    CalculadoraComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    CalculadoraService //registrando como um provedor de serviços para o Angular
  ]
})

export class CalculadoraModule { }

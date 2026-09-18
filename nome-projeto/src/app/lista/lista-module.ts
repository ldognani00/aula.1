import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListaRoutingModule } from './lista-routing-module';
import { Ex1Component } from './ex1/ex1';
import { Ex2Component } from './ex2/ex2';
import { Ex3Component } from './ex3/ex3';
import { Ex4Component } from './ex4/ex4';
import { Ex5Component } from './ex5/ex5';
import { Ex6Component } from './ex6/ex6';
import { Ex7Component } from './ex7/ex7';
import { Ex8Component } from './ex8/ex8';
import { Ex9Component } from './ex9/ex9';
import { Ex10Component } from './ex10/ex10';
import { Ex11Component } from './ex11/ex11';
import { DesafioComponent } from './desafio/desafio';

@NgModule({
  declarations: [
    Ex10Component,
    Ex2Component,
    Ex3Component,
    Ex4Component,
    Ex5Component,
    Ex6Component,
    Ex7Component,
    Ex8Component,
    Ex9Component,
    Ex10Component,
    Ex11Component,
    DesafioComponent,
  ],
  imports: [CommonModule,FormsModule, ListaRoutingModule],
})
export class ListaModule {}

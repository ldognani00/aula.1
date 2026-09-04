import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaRoutingModule } from './lista-routing-module';
import { Ex2 } from './ex2/ex2';
import { Ex3 } from './ex3/ex3';
import { Ex4 } from './ex4/ex4';
import { Ex5 } from './ex5/ex5';
import { Ex6 } from './ex6/ex6';
import { Ex7 } from './ex7/ex7';
import { Ex8 } from './ex8/ex8';
import { Ex9 } from './ex9/ex9';

@NgModule({
  declarations: [Ex2, Ex3, Ex4, Ex5, Ex6, Ex7, Ex8, Ex9],
  imports: [CommonModule, ListaRoutingModule],
})
export class ListaModule {}

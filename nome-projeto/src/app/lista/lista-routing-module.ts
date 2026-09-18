import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

const routes: Routes = [
  { path: 'ex1', component: Ex1Component },
  { path: 'ex2', component: Ex2Component },
  { path: 'ex3', component: Ex3Component },
  { path: 'ex4', component: Ex4Component },
  { path: 'ex5', component: Ex5Component },
  { path: 'ex6', component: Ex6Component },
  { path: 'ex7', component: Ex7Component },
  { path: 'ex8', component: Ex8Component },
  { path: 'ex9', component: Ex9Component },
  { path: 'ex10', component: Ex10Component },
  { path: 'ex11', component: Ex11Component },
  { path: 'desafio', component: DesafioComponent },
  { path: '', redirectTo: 'ex1', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaRoutingModule { }
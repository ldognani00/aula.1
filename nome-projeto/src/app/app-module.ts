import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Cabecalho } from './cabecalho/cabecalho';
import { CardProduto } from './card-produto/card-produto';

@NgModule({
  declarations: [App, Cabecalho, CardProduto],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [App],
})
export class AppModule {}

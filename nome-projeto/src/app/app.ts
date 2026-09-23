import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('nome-projeto');

  cabecalhoLoja = 'Loja Angular';

  produtos = [
    { nome: 'Teclado mecânico', preco: 250, disponivel: true},
    { nome: 'Mouse sem fio', preco: 120, disponivel: true},
    { nome: 'Monitor', preco:
       1500, disponivel: false }
  ];
}

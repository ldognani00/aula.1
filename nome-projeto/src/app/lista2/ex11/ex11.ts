import { Component } from '@angular/core';
import { Produto } from '../produto.model';

@Component({
  selector: 'app-ex11',
  standalone: false,
  templateUrl: './ex11.html',
  styleUrl: './ex11.css'
})
export class Ex11 {
  somenteDisponiveis: boolean = false;

  produtos: Produto[] = [
    { id: 1, nome: 'Mouse', preco: 50.00, quantidade: 0, promocao: false },
    { id: 2, nome: 'Teclado', preco: 150.00, quantidade: 3, promocao: true },
    { id: 3, nome: 'Monitor', preco: 900.00, quantidade: 10, promocao: false },
    { id: 4, nome: 'Headset', preco: 250.00, quantidade: 5, promocao: true },
    { id: 5, nome: 'Webcam', preco: 180.00, quantidade: 1, promocao: false }
  ];

  alternarFiltro(): void {
    this.somenteDisponiveis = !this.somenteDisponiveis;
  }
}
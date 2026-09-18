import { Component } from '@angular/core';
import { Produto } from '../produto.model';

@Component({
  selector: 'app-ex9',
  standalone: false,
  templateUrl: './ex9.html',
  styleUrl: './ex9.css',
})
export class Ex9 {
  produtos: Produto[] = [
    { id: 1, nome: 'Mouse', preco:50.00, quantidade: 0, promocao: false },
    { id: 2, nome: 'Teclado', preco: 150.00, quantidade: 3, promocao: true },
    { id: 3, nome: 'Monitor', preco: 900.00, quantidade: 10, promocao: false },
    { id: 4, nome: 'Headset', preco: 250.00, quantidade: 5, promocao: true },
    { id: 5, nome: 'Webcam', preco: 180.00, quantidade: 1, promocao: false }
  ];
}

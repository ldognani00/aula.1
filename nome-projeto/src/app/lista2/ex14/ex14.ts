import { Component } from '@angular/core';

interface Item {
  id: number;
  nome: string;
}

@Component({
  selector: 'app-ex14',
  standalone: false,
  templateUrl: './ex14.html',
  styleUrl: './ex14.css'
})
export class Ex14 {
  mostrarMensagem: boolean = true;
  itens: Item[] = [
    { id: 101, nome: 'Item A' },
    { id: 102, nome: 'Item B' }
  ];

  limpar(): void {
    this.itens = [];
  }
}
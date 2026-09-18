import { Component } from '@angular/core';

@Component({
  selector: 'app-ex6',
  standalone: false,
  templateUrl: './ex6.html',
  styleUrl: './ex6.css',
})
export class Ex6 {
  listaOriginal: string[]= ['Ana', 'Bruno', 'Carlos', 'Daniela', 'Eduardo'];
  nomes: string[] = [...this.listaOriginal];

  removerUltimo(): void {
    this.nomes.pop();
  }

  limparLista(): void {
    this.nomes = [];
  }

  restaurarLista(): void {
    this.nomes = [...this.listaOriginal];
  }
}

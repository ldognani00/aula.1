import { Component } from '@angular/core';

@Component({
  selector: 'app-ex7',
  standalone: false,
  templateUrl: './ex7.html',
  styleUrl: './ex7.css',
})
export class Ex7 {
  disciplinas: string[] = [
    'Desenvolvimento Web',
    'Banco de Dados',
    'Engenharia de Software',
    'Estrutura de Dados',
    'Redes de Computadores',
    'Sistemas Operacionais'
  ];
}

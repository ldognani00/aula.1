import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-produto',
  standalone: false,
  templateUrl: './card-produto.html',
  styleUrl: './card-produto.css',
})
export class CardProduto {
  @Input() nome: string = '';
  @Input() preco: number = 0;
  @Input() disponivel: boolean = true;
}

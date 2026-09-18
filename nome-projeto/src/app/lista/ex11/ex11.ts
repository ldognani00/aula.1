import { Component } from '@angular/core';

@Component({
  selector: 'app-ex11',
  standalone: false,
  templateUrl: './ex11.html',
  styleUrl: './ex11.css',
})
export class Ex11Component {
  produto = 'Mouse Gamer';
  preco = 120;
  quantidade = 1;
  mensagem = '';

  incrementar() {
    this.quantidade++;
  }

  decrementar(){
    if(this.quantidade > 1){
      this.quantidade--;
    }
  }

  adicionar() {
    this.mensagem = `Adicionado ao carrinho: ${this.produto}`;
  }
}

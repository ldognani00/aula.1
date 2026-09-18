import { Component } from '@angular/core';

interface ProdutoItem {
  id: number;
  nome: string;
  quantidade: number;
}

@Component({
  selector: 'app-ex12',
  standalone: false,
  templateUrl: './ex12.html',
  styleUrl: './ex12.css',
})
export class Ex12 {
  novoNome: string = '';
  novaQuantidade: number | null = null;
  mensagemErro: string = '';

  produtos: ProdutoItem[] = [
    { id: 1, nome: 'Cadeira Gamer', quantidade: 4 }
  ];

  cadastrar(): void {
    if (!this.novoNome || this.novoNome.trim() === '') {
      this.mensagemErro = 'O nome do produto é obrigatório.';
      return;
    }

    if (this.novaQuantidade === null || this.novaQuantidade < 0) {
      this.mensagemErro = 'A quantidade deve ser maior ou igual a zero.';
      return;
    }

    this.produtos.push({
      id: Date.now(),
      nome: this.novoNome.trim(),
      quantidade: this.novaQuantidade
    });

    this.novoNome = '';
    this.novaQuantidade = null;
    this.mensagemErro = '';
  }

  excluir(id: number): void {
    this.produtos = this.produtos.filter(p => p.id !== id);
  }
}

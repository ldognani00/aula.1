import { Component } from '@angular/core';
import { Projeto, StatusProjeto } from './projeto.model';

@Component({
  selector: 'app-desafio',
  standalone: false,
  templateUrl: './desafio.html',
  styleUrl: './desafio.css'
})
export class Desafio {
  ocultarConcluidos: boolean = false;

  projetos: Projeto[] = [
    { id: 1, titulo: 'E-commerce Angular', equipe: 'Alpha', nota: 8.5, status: 'concluído', entregue: true },
    { id: 2, titulo: 'API de Vendas', equipe: 'Beta', nota: 5.5, status: 'testes', entregue: false },
    { id: 3, titulo: 'App Mobile', equipe: 'Gamma', status: 'planejamento', entregue: false },
    { id: 4, titulo: 'Sistema Escolar', equipe: 'Delta', nota: 7.0, status: 'desenvolvimento', entregue: true }
  ];

  opcoesStatus: StatusProjeto[] = ['planejamento', 'desenvolvimento', 'testes', 'concluído'];

  alternarOcultarConcluidos(): void {
    this.ocultarConcluidos = !this.ocultarConcluidos;
  }

  alterarStatus(projeto: Projeto, novoStatus: StatusProjeto): void {
    projeto.status = novoStatus;
  }

  get totalProjetos(): number {
    return this.projetos.length;
  }

  get totalConcluidos(): number {
    return this.projetos.filter(p => p.status === 'concluído').length;
  }
}
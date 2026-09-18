import { Component } from '@angular/core';
import { Tarefa } from '../tarefa.model';

@Component({
  selector: 'app-ex13',
  standalone: false,
  templateUrl: './ex13.html',
  styleUrl: './ex13.css'
})
export class Ex13 {
  tarefas: Tarefa[] = [
    { id: 1, titulo: 'Criar componentes', responsavel: 'Ana', prioridade: 'alta', concluida: false },
    { id: 2, titulo: 'Ajustar rotas', responsavel: 'Carlos', prioridade: 'média', concluida: true },
    { id: 3, titulo: 'Testar formulários', responsavel: 'Bruno', prioridade: 'baixa', concluida: false },
    { id: 4, titulo: 'Estilizar tabelas', responsavel: 'Daniela', prioridade: 'baixa', concluida: true },
    { id: 5, titulo: 'Revisar PRs', responsavel: 'Eduardo', prioridade: 'alta', concluida: false },
    { id: 6, titulo: 'Deploy de teste', responsavel: 'Ana', prioridade: 'média', concluida: false }
  ];

  alternarStatus(tarefa: Tarefa): void {
    tarefa.concluida = !tarefa.concluida;
  }

  get totalConcluidas(): number {
    return this.tarefas.filter(t => t.concluida).length;
  }

  get totalPendentes(): number {
    return this.tarefas.filter(t => !t.concluida).length;
  }
}
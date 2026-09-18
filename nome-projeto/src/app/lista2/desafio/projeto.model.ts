export type StatusProjeto = 'planejamento' | 'desenvolvimento' | 'testes' | 'concluído';

export interface Projeto {
  id: number;
  titulo: string;
  equipe: string;
  nota?: number;
  status: StatusProjeto;
  entregue: boolean;
}
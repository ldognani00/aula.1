import { Component } from '@angular/core';

@Component({
  selector: 'app-desafio',
  standalone: false,
  templateUrl: './desafio.html',
  styleUrl: './desafio.css',
})
export class DesafioComponent {
  nomeAluno='';
  disciplinas = 1;
  mensagemConfirmacao = '';

  aumentarDisciplinas() {
    this.disciplinas++;
  }

  diminuirDisciplinas() {
    if (this.disciplinas > 1) {
      this.disciplinas--;
    }
  }

  confirmarMatricula(){
    this.mensagemConfirmacao = `Matrícula realizada com sucesso para ${this.nomeAluno} em ${this.disciplinas} disciplina(s)!`;
  }
}

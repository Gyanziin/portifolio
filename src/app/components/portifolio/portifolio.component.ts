import { Component } from '@angular/core';

@Component({
  selector: 'app-portifolio',
  standalone: true,
  imports: [],
  templateUrl: './portifolio.component.html',
  styleUrl: './portifolio.component.scss'
})
export class PortifolioComponent {
  redirecionarParasiteRestaurante() {
    window.location.href = 'https://modelo-site-restaurante.vercel.app';
  }

  redirecionarParasiteEfood() {
    window.location.href = 'https://projeto-efood-xi.vercel.app';
  }

  redirecionarParasiteListaDeTarefas() {
    window.location.href = 'https://projeto-minhas-tarefas-5ur8.vercel.app';
  }
}
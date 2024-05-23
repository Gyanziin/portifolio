import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss'
})
export class SobreComponent {
  redirecionarParaWhatsApp() {
    window.location.href = 'https://wa.me/5527998146338?text=Olá,%20gostaria%20de%20entrar%20em%20contato%20com%20você.';
  }

  redirecionarParaLinkedIn() {
    window.location.href = 'https://www.linkedin.com/in/gyan-hugo';
  }

  // Redirecionar para o GitHub
  redirecionarParaGitHub() {
    window.location.href = 'https://github.com/Gyanziin';
  }
}

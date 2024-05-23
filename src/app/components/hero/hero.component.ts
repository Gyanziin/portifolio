import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgOptimizedImage, ButtonComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  redirecionarParaWhatsApp() {
    window.location.href = 'https://wa.me/5527998146338?text=Olá,%20gostaria%20de%20entrar%20em%20contato%20com%20você.';
  }
}

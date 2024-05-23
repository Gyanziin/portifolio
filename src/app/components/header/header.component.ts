import { NgOptimizedImage, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgOptimizedImage,
    ButtonComponent,
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  btnMenu: boolean = false

  btnAbrir() {
    this.btnMenu = !this.btnMenu
  }

  redirecionarParaWhatsApp() {
    window.location.href = 'https://wa.me/5527998146338?text=Olá,%20gostaria%20de%20entrar%20em%20contato%20com%20você.';
  }
}

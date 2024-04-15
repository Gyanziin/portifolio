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

  btnMobile() {
    this.btnMenu = !this.btnMenu
  }
}

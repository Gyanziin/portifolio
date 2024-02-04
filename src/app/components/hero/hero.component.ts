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

}

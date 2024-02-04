import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HeroComponent } from '../hero/hero.component';
import { EspecialidadesComponent } from '../especialidades/especialidades.component';
import { SobreComponent } from '../sobre/sobre.component';
import { PortifolioComponent } from '../portifolio/portifolio.component';
import { FormComponent } from '../form/form.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, HeroComponent, EspecialidadesComponent, SobreComponent, PortifolioComponent, FormComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

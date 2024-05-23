import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { EspecialidadesComponent } from './components/especialidades/especialidades.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { PortifolioComponent } from './components/portifolio/portifolio.component';
import { FormComponent } from './components/form/form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent, 
    ModalModule, 
    TooltipModule,
    BsDropdownModule, 
    HomeComponent,
    EspecialidadesComponent,
    SobreComponent,
    PortifolioComponent,
    FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'meu-portifolio';
}

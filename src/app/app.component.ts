import { Component } from '@angular/core';
import { BuscarEnderecoComponent } from './buscar-endereco/buscar-endereco.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BuscarEnderecoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}

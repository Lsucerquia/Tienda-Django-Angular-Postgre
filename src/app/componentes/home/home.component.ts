import { Component } from '@angular/core';
import { ProductosComponent } from '../productos/productos.component';
import { RouterModule } from '@angular/router';
import { ProductosService } from '../productos/productos.servicio';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductosComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  

}




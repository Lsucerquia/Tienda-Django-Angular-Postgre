import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonios.component.html',
  styleUrl: './testimonios.component.scss'
})
export class TestimoniosComponent {
  testimonios = [
    {
      texto: 'Excelente servicio, Productos en muy buen estado',
      autor: 'Juan Pérez',
      imagen: 'assets/productos/testimonio1.jpg' // Asegúrate de usar la extensión correcta (.jpg, .png, etc)
    },
    {
      texto: 'Muy profesional y puntual. Estoy muy satisfecho.',
      autor: 'Ana García',
      imagen: '/assets/productos/testimonio2.jpg'
    },
    {
      texto: 'Una experiencia increíble, sin duda volveré.',
      autor: 'Luis Martínez',
      imagen: '/assets/productos/testimonio3.jpg'
    }
  ];

  
}




 
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-acerca',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './acerca.component.html',
  styleUrl: './acerca.component.scss'
})
export class AcercaComponent {
  impactosAmbientales = [
    {
      titulo: 'Ahorro de Agua',
      descripcion: '2,700 litros de agua ahorrados por cada prenda reutilizada',
      icono: 'fa-water',
      imagen: 'assets/impacto1.jpg',  // Asegúrate que esta propiedad esté bien escrita
    },
    {
      titulo: 'Reducción de CO2',
      descripcion: 'Menos emisiones equivalentes a conducir 11 km',
      icono: 'fa-leaf',
      imagen: 'assets/impacto2.jpg',
    },
    {
      titulo: 'Menos Residuos',
      descripcion: 'Reducción de residuos textiles y domésticos',
      icono: 'fa-recycle',
      imagen: 'assets/impacto3.jpg',
    }
  ] 

  categorias = [
    {
      titulo: 'Moda Sostenible',
      items: ['Ropa de marcas seleccionadas', 'Prendas vintage únicas', 'Accesorios de calidad', 'Todas las tallas y estilos'],
      icono: 'fa-tshirt'
    },
    {
      titulo: 'Hogar Consciente',
      items: ['Decoración con historia', 'Artículos de hogar funcionales', 'Piezas vintage especiales', 'Textiles para el hogar'],
      icono: 'fa-home'
    }
  ];

  procesosSeleccion = [
    {
      titulo: 'Evaluación Cuidadosa',
      descripcion: 'Revisión detallada del estado de cada pieza',
      icono: 'fa-search'
    },
    {
      titulo: 'Preparación',
      descripcion: 'Limpieza profesional y ecológica',
      icono: 'fa-broom'
    },
    {
      titulo: 'Precio Justo',
      descripcion: 'Valoración considerando calidad y marca',
      icono: 'fa-tag'
    }
  ];

  contactInfo = {
    direccion: 'calle 20 #60-90',
    telefono: '3120 5558888',
    email: 'MariaCristina@email.com',
    horarios: {
      lunes_viernes: '9:00 AM - 6:00 PM',
      sabado: '10:00 AM - 4:00 PM',
      domingo: 'Cerrado'
    },
    redes: {
      instagram: '@tutienda',
      facebook: '/tutienda'
    }
  };

}

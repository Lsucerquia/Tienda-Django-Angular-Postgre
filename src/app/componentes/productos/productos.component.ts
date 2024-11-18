import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ProductosService } from './productos.servicio';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.scss'
})

export class ProductosComponent implements OnInit {
  productos: any[] = [];
  categoriaId!: number;

  constructor(
    private productosService: ProductosService,
    private route: ActivatedRoute // Inyectamos ActivatedRoute para obtener parámetros
  ) {}

  ngOnInit(): void {
    // Suscribirse a los parámetros de la ruta
    this.route.params.subscribe((params) => {
      this.categoriaId = +params['id']; // Convertir a número
      this.cargarProductosPorCategoria(); // Cargar productos según la categoría
    });
  }

  cargarProductosPorCategoria(): void {
    this.productosService.obtenerProductosPorCategoria(this.categoriaId).subscribe(
      (data) => {
        this.productos = data; // Asigna los productos al array
      },
      (error) => {
        console.error('Error al cargar productos por categoría:', error);
      }
    );
  }

  cargarProductos(): void {
    this.productosService.getProductos().subscribe({
      next: (data) => {
        this.productos = data; // Cargar todos los productos (si es necesario)
      },
      error: (error) => {
        console.error('Error al cargar productos:', error);
      },
    });
  }
}
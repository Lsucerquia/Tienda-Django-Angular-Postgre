import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from './producto.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private apiUrl = 'http://127.0.0.1:8000/api/productos/'; // Cambia esta URL según tu backend

  constructor(private http: HttpClient) {}

  getProductos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  obtenerProductosPorCategoria(categoriaId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}?categoria=${categoriaId}`);
  }
}
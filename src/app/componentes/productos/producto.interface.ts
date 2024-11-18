// Define la interfaz para un Producto
export interface Producto {
    nombre: string;
    descripcion: string;
    precio: number;
    categoria: string;  // En este caso, asumimos que se devuelve como un string (nombre de la categoría).
    imagen?: string;    // La imagen es opcional, ya que algunos productos pueden no tener imagen.
  }
import db from '../util/database.js';

class Codigo {
  constructor(palabraClave, descripcion, lenguajes, fecha, rutaImagen) {
    this.palabraClave = palabraClave;
    this.descripcion = descripcion;
    this.lenguajes = lenguajes;
    this.fecha = fecha;
    this.rutaImagen = rutaImagen;
  }

  static fetchAll() {
    return db.execute('SELECT * FROM codigo');
  }
}

export default Codigo;

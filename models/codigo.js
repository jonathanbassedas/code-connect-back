const db = require('../util/database');

module.exports = class Codigo {
    constructor(palabraClave, descripcion, lenguajes, fecha, rutaImagen){
        this.palabraClave = palabraClave;
        this.descripcion = descripcion;
        this.lenguajes = lenguajes;
        this.fecha = fecha;
        this.rutaImagen = rutaImagen;
    }

    static fetchAll(){
        return db.execute('SELECT * FROM codigo ORDER BY fecha DESC');
    }

    static fetchCodigoByPalabraclave(palabraclave){
        return db.execute('SELECT * FROM codigo where palabraclave = ?', [palabraclave]);
    }

    static fetchRecientes(){
        return db.execute('SELECT * FROM codigo ORDER BY fecha DESC limit 4');
    }
    

};

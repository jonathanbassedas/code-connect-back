const db = require('../util/database');

module.exports = class Usuario {
    constructor(username, email, password, registrationDate){
        this.username = username;
        this.email = email;
        this.password = password;
        this.registrationDate = registrationDate;
    }

    static fetchUsuario(username){
        return db.execute('SELECT * FROM usuario WHERE nombreUsuario = ?', [username]);
    }

    static findUserById(id){
        return db.execute('SELECT * FROM usuario WHERE id = ?', [id]);
    }

    static fetchCorreo(email){
        return db.execute('SELECT 1 FROM usuario WHERE correoElectronico = ?', [email]);
    }

    static insertUsuario(username, email, password){
        return db.execute('INSERT INTO usuario (nombreUsuario, correoElectronico, contrasena) VALUES (?, ?, ?)', [username, email, password]);
    }
}
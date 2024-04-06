require('dotenv').config()
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

exports.register = async (req, res, next) => {
    try {
        const {username, email,password} = req.body;

        const [existsUsername] = await User.fetchUsuario(username);
        const [existsEmail] = await User.fetchCorreo(email);

        if(existsUsername.length != 0){
            return res.status(403).json({messaje :"El nombre de usuario " + username + " ya existe"});
        }

        if(existsEmail.length != 0){
            return res.status(403).json({messaje :"El correo " + email + " ya esta registrado"});
        }

        let passwordEncrypted = await bcryptjs.hash(password, 12);

        await User.insertUsuario(username, email, passwordEncrypted);

        const registeredUser = await User.fetchUsuario(username);
        const id = registeredUser[0].id;
        const token = jwt.sign({id:id}, process.env.JWT_SECRET_KEY, {expiresIn: process.env.JWT_TOKEN_EXPIRE});

        res.status(201).json({token: token});
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.login = async (req, res, next) => {
    try {
        const {username, password} = req.body;

        const [existsUser] = await User.fetchUsuario(username);

        if(existsUser.length == 0 || !(await bcryptjs.compare(password, existsUser[0].contrasena))){
            return res.status(403).json({messaje :"El correo " + email + " ya esta registrado"});
        }

        const id = existsUser[0].id;
        const token = jwt.sign({id:id}, process.env.JWT_SECRET_KEY, {expiresIn: process.env.JWT_TOKEN_EXPIRE});

        res.status(200).json({token: token});
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.verifyToken = async (req, res, next) => {
    try {
        const token = req.query.token;

        if(!token){
            return res.status(403).json({messaje : "Token no enviado"});
        }

        const isTokenValid = jwt.verify(token, process.env.JWT_SECRET_KEY, (error, decoded) => {
            return error ? false : true;
        });

        if(isTokenValid){
            const user = await User.findUserById(decoded.id);
            if(!user) return res.status(403).json({messaje : "Usuario no encontrado"});
        }
        
        return res.status(200).json({ auth: isTokenValid });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}
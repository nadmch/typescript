"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var direccion_1 = require("./direccion");
var mail_1 = require("./mail");
var telefono_1 = require("./telefono");
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, edad, dni, cumpleanos, color, sexo, direccion, mail, telefono, notas) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._dni = dni;
        this._cumpleanos = cumpleanos;
        this._colorFavorito = color;
        this._sexo = sexo;
        this._direccion = direccion;
        this._mail = mail;
        this._telefono = telefono;
        this._notas = notas;
    }
    Persona.prototype.crearDireccion = function (datosDeDireccion) {
        var nuevaDireccion = new direccion_1.Direccion(datosDeDireccion);
        this._direccion = nuevaDireccion;
    };
    Persona.prototype.crearMail = function (nuevoTipo, nuevaMail) {
        var nuevoEmail = new mail_1.Mail(nuevoTipo, nuevaMail);
        this._mail = nuevoEmail;
    };
    Persona.prototype.crearTelefono = function (nuevoTipo, nuevoNumeroMovil) {
        var nuevoTelefono = new telefono_1.Telefono(nuevoTipo, nuevoNumeroMovil);
        this._telefono = nuevoTelefono;
    };
    return Persona;
}());
exports.Persona = Persona;

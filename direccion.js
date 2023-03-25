"use strict";
exports.__esModule = true;
exports.Direccion = void 0;
var Direccion = /** @class */ (function () {
    function Direccion(datosnuevosDireccion) {
        this._calle = datosnuevosDireccion._calle;
        this._numero = datosnuevosDireccion._numero;
        this._piso = datosnuevosDireccion._piso;
        this._letra = datosnuevosDireccion._letra;
        this._codigoPostal = datosnuevosDireccion._codigoPostal;
        this._poblacion = datosnuevosDireccion._poblacion;
        this._provincia = datosnuevosDireccion._provincia;
    }
    return Direccion;
}());
exports.Direccion = Direccion;

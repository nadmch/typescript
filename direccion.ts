import { IDireccion } from "./interfaces";

export class Direccion implements IDireccion {
  _calle: string;
  _codigoPostal: number;
  _letra: string;
  _numero: number;
  _piso: number;
  _poblacion: string;
  _provincia: string;

  constructor(datosnuevosDireccion: IDireccion) {
    this._calle = datosnuevosDireccion._calle;
    this._numero = datosnuevosDireccion._numero;
    this._piso = datosnuevosDireccion._piso;
    this._letra = datosnuevosDireccion._letra;
    this._codigoPostal = datosnuevosDireccion._codigoPostal;
    this._poblacion = datosnuevosDireccion._poblacion;
    this._provincia = datosnuevosDireccion._provincia;
  }
}

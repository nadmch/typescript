import { Direccion } from "./direccion";
import { IDireccion } from "./interfaces";
import { Mail } from "./mail";
import { Telefono } from "./telefono";

export class Persona {
  _nombre: string;
  _apellido: string;
  _edad: number;
  _dni: number | string;
  _cumpleanos: string | number;
  _colorFavorito: string;
  _sexo: string;
  _direccion: Direccion;
  _mail: Mail;
  _telefono: Telefono;
  _notas: string | number;

  constructor(
    nombre: string,
    apellido: string,
    edad: number,
    dni: number | string,
    cumpleanos: string | number,
    color: string,
    sexo: string,
    direccion: Direccion,
    mail: Mail,
    telefono: Telefono,
    notas: string | number
  ) {
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

  crearDireccion(datosDeDireccion: IDireccion) {
    const nuevaDireccion = new Direccion(datosDeDireccion);
    this._direccion = nuevaDireccion;
  }
  crearMail(nuevoTipo: string, nuevaMail: string | number) {
    const nuevoEmail = new Mail(nuevoTipo, nuevaMail);
    this._mail = nuevoEmail;
  }
  crearTelefono(nuevoTipo: string, nuevoNumeroMovil: number) {
    const nuevoTelefono = new Telefono(nuevoTipo, nuevoNumeroMovil);
    this._telefono = nuevoTelefono;
  }
}

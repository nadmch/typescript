export class Mail {
  _tipo: string;
  _direccionMail: string | number;

  constructor(tipo: string, direccionMail: string | number) {
    this._tipo = tipo;
    this._direccionMail = direccionMail;
  }
}

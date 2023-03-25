import { Persona } from "./persona";

const persona1 = new Persona(
  "José",
  "Perez",
  27,
  "Y8879879",
  "02 / 03 / 1996",
  "Verde",
  "Masculino",
  {
    _calle: "Av. Meridiana",
    _numero: 45,
    _piso: 2,
    _letra: "K",
    _codigoPostal: 78788,
    _poblacion: "Barcelona",
    _provincia: "Barcelona",
  },
  { _tipo: "Personal", _direccionMail: "jjjjj78@gmail.com" },
  { _tipo: "fijo", _numero: 32138980 },
  "Llamar el lunes!"
);
console.log(persona1);
persona1.crearDireccion({
  _calle: "Calle Insdutria",
  _numero: 12,
  _piso: 1,
  _letra: "A",
  _codigoPostal: 12122,
  _poblacion: "Barcelona",
  _provincia: "Barcelona",
});
persona1.crearMail("Personal", "j12@gmail.com");
persona1.crearTelefono("Movil", 600803321);
console.log(persona1);

const persona2 = new Persona(
  "Juan",
  "Martinez",
  26,
  "N898787",
  "05/10/1996",
  "Amarillo",
  "Masculino",
  {
    _calle: "Av. Diagonal",
    _numero: 208,
    _piso: 4,
    _letra: "O",
    _codigoPostal: 80088,
    _poblacion: "Barcelona",
    _provincia: "Barcelona",
  },
  { _tipo: "Personal", _direccionMail: "jmmm25@gmail.com" },
  { _tipo: "Fijo", _numero: 43655786897 },
  "Llamar mañana!!!"
);
console.log(persona2);

const persona3 = new Persona(
  "Andrea",
  "Sanchez",
  33,
  "J6786876",
  "08/09/1990",
  "Rojo",
  "Femenino",
  {
    _calle: "Av. Aragó",
    _numero: 20,
    _piso: 5,
    _letra: "A",
    _codigoPostal: 800308,
    _poblacion: "Barcelona",
    _provincia: "Barcelona",
  },
  { _tipo: "Personal", _direccionMail: "Aasss23@gmail.com" },
  { _tipo: "movil", _numero: 576578898 },
  "Llamar el Jueves!!!"
);
console.log(persona3);

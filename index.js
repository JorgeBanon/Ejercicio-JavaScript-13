let Nombre = 'Jorge';
console.log(Nombre);
let Apellido = `Bañón`;
console.log(Apellido);
let estudiante = "";
estudiante = estudiante.concat(Nombre, " ", Apellido);
console.log(estudiante);
let estudianteMayus = "";
estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);
let estudianteMinus = "";
estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);
let tamanyo;
tamanyo = estudiante.length;
console.log(tamanyo);
let primera = "";
primera = estudiante.substring(0,1);
console.log(primera);
let ultima = "";
ultima = estudiante.substring(tamanyo - 1, tamanyo + 1);
console.log(ultima);
let sinespacios = "";
sinespacios = estudiante.replace(" ","");
console.log(sinespacios);
let contiene = "";
contiene = estudiante.includes(Nombre);
console.log(contiene);
const datos = require("./datos.json");


//PARCIAL_1


/*
  Para correr este archivo, utilicen el comando
  $ node parcial1.js

  Para abrir el terminal desde la ubicacion de este folder, usen Ctrl + Shift + C.

  La variable importada "datos" contiene datos de estudiantes.
*/

function puntoUno(estudiantes) {
  // CODIGO DE PUNTO 1 AQUI
  let cantidad = 0;
  for (let i = 0; i < estudiantes.length; i++) {
    let cursos = estudiantes[i].cursos;
    let suma = 0;
    for (let j = 0; j < cursos.length; j++) {
      suma += cursos[j].nota;
    }
    let promedio = suma / cursos.length;
    if (promedio < 3.3) {
      cantidad++;
    }
  }
  return cantidad;
}

function puntoDos(estudiantes) {
  // CODIGO DE PUNTO 2 AQUI
  let nombres = []
  let longitud = estudiantes.length
  for (let i=0; i < longitud; i++){
    nombres[i] = estudiantes[i].nombre + " " + estudiantes[i].apellido
  }
  return nombres;
}

function puntoTres(estudiantes) {
  // CODIGO DE PUNTO 3 AQUI
  let ordenados = estudiantes.slice().sort(function(a, b) {
    return a.altura - b.altura;
  });
  let ids = [];
  for (let i = 0; i < ordenados.length; i++) {
    ids.push(ordenados[i]._id);
  }
  return ids;
}

function puntoCuatro(numeros) {
  // CODIGO DE PUNTO 4 AQUI
  if (numeros.length === 0) return 0;
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  return suma / numeros.length;
}

function puntoCinco(palabra) {
  // CODIGO DE PUNTO 5 AQUI
  let invertida = palabra.split('').reverse().join('');
  if (palabra === invertida){
    return true
  } else {
    return false
  }
}

function puntoSeis(palabra) {
  // CODIGO DE PUNTO 6 AQUI
  let invertida = palabra.split('').reverse().join('');
  return invertida;
}

// CODIGO DE PUNTO 7 AQUI
function puntoSiete(lista, campo) {
  // Retorna la lista de objetos ordenada ascendentemente según el valor del campo
  let copia = lista.slice();
  copia.sort(function(a, b) {
    if (a[campo] < b[campo]) return -1;
    if (a[campo] > b[campo]) return 1;
    return 0;
  });
  return copia;
}

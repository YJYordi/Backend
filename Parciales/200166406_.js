const datos = require("./datos.json");

//PUNTO 1:
function puntoUno(estudiantes, extracurricular) {
  // CODIGO DE PUNTO 1 AQUI
    return estudiantes
    .filter(est => est.info_extra_curriculares.some(ec => ec.nombre === extracurricular))
    .map(est => est.info_personal.correo);
}
//x = puntoUno(datos, "INNOVA")
//console.log(x.length) //137


// PUNTO 2:
function puntoDos(estudiantes, semestre) {
  const promedios = estudiantes.map(est => {
    // cursos de ese semestre
    const cursos = est.info_matricula.filter(c => c.semestre === semestre);
    if (cursos.length === 0) return null;

    const notas = cursos.flatMap(c => c.notas.map(n => n.nota * n.peso));
    const promedio = notas.reduce((a, b) => a + b, 0) / cursos.length;

    return { nombre: `${est.info_personal.nombre} ${est.info_personal.apellido}`, promedio };
  }).filter(x => x !== null);

  return promedios.reduce((max, actual) => actual.promedio > max.promedio ? actual : max).nombre;
}
//x = puntoDos(datos, 5)
//console.log(x)


//PUNTO 3:
function puntoTres(estudiantes) {
  return estudiantes
    .filter(est => Math.max(...est.info_matricula.map(c => c.semestre)) === 1)
    .map(est => {
      const { nombre, apellido, altura, nacimiento, correo, gender } = est.info_personal;
      return {
        gender,
        titulo: gender === "M" ? "Sr." : "Sra.",
        nombreCompleto: `${nombre} ${apellido}`,
        primerNombre: nombre,
        primerApellido: apellido,
        altura: altura * 100, // convertir de metros a cm si es el caso
        edad: new Date().getFullYear() - new Date(nacimiento).getFullYear(),
        nacimiento,
        correo,
        usuario: correo.split("@")[0]
      };
    });
}

//x = puntoTres(datos);
//console.log(x)


//PUNTO 4:
function puntoCuatro(estudiantes) {
  const semestreActual = Math.max(
  ...estudiantes.flatMap(est => est.info_matricula.map(c => c.semestre))
  );
  const jugadores = estudiantes.filter(est =>
  est.info_extra_curriculares.some(ec => ec.nombre === "Baloncesto" && ec.semestre === semestreActual)
  );

  return jugadores
    .reduce((max, est) =>
      est.info_personal.altura > max.info_personal.altura ? est : max
    ).info_personal.nombre + " " + jugadores[0].info_personal.apellido;
}

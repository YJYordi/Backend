//Practiquemos un poco

/*Pide al usuario su edad con prompt() y:

Si es menor de 18 → "No puedes entrar"

Si es mayor o igual a 18 → "Bienvenido"*/

function edad(edad){
    if(edad < 18){
        console.log("Eres menor de edad.")
    }else{
        console.log("Bienvenido!")
    }
};

/*Crea un programa que:

Pregunte un número

Diga si es positivo, negativo o cero*/

function entero(num){
    if(num > 0){
        return "El número es positivo";
    }else if(num == 0){
        return "El número es igual a 0";
    }else{
        return"El número es negativo";
    }
};

//----------- Prueba ---------------
/*
1. Desarrolle una función que reciba un estudiante y retorne los nombres de los cursos del estudiante.
2. Desarrolle una función que reciba un estudiante y retorne la nota maxima lograda por el estudiante.
3. Desarrolle una función que reciba un estudiante y retorne si el estudiante mide mas de 1,65m.
4. Desarrolle una función que reciba un estudiante el nombre completo del estudiante.
5. Desarrolle una función que reciba dos estudiantes y retorne la diferencia de altura entre los
estudiantes.
6. Desarrolle una función que reciba un estudiante y retorne el estudiante con el campo
'nombreCompleto' agregado.
 2024-03
*/
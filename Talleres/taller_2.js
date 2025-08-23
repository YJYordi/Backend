/*
Punto 1:
Desarrolle una funcion llamada findMax que reciba una lista de números por
parámetro y retorne el mayor valor.
*/

function findMax(numeros){
    let max = numeros[0]
    for(let i=0; i < numeros.length; i++){
        if (max < numeros[i]){
            max = numeros[i]
        }
    }
    return max
}
//console.log(findMax([3, 17, -1, 4, -19]))

/*
Punto 2:
Desarrolle una funcion llamada includes que reciba una lista de números y un
numero por parámetro y retorne un booleano representando si el numero se
encuentra en la lista. */

function includes(lista, numero){
    let include = false
    let cont = 0
    while(include == false && cont < lista.length){
        if (numero === lista[cont]) {
            include = true
        }
        cont++
    }
    return include
}
//console.log(includes([3, 17, -1, 4, -19], 2))
//console.log(includes([3, 17, -1, 4, -19], 4))

/*
Punto 3:
Desarrolle una funcion llamada sum que reciba una lista de números y retorne la
suma de los elementos de la lista.
*/

function sum(numeros){
    let sum = 0
    for(let i=0; i < numeros.length; i++){
        sum += numeros[i]
    }
    return sum
}
//console.log(sum([3, 17, -1, 4, -19]))

/*
Punto 4:
Desarrolle una funcion llamada missingNumbers que reciba una lista de números
y retorne una lista de los números faltantes entre el menor y mayor de la lista.
*/

function missingNumbers(numeros){
    let max = numeros[0]
    let min = numeros[0]
    let missing = []
    for(let i=0; i < numeros.length; i++){
        if (max < numeros[i]){
            max = numeros[i]
        }
        if (min > numeros[i]){
            min = numeros[i]
        }
    }
    for(let i=min+1; i < max; i++){
        let found = false
        for(let j=0; j < numeros.length; j++){
            if (numeros[j] === i){
                found = true
                break
            }
        }
        if(!found){
            missing.push(i)
        }
    }
    return missing
}

//console.log(missingNumbers([7, 2, 4, 6, 3, 9]))
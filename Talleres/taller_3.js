/*
Punto 1:
Desarrolle una funcion llamada desglosarString que reciba una string, y la string "vocales" o "consonantes", y
retorne la cantidad de vocales o consonantes de la string recibida. 
*/
function desglosarString(palabra, filtro){
    let result = 0
    if(filtro === "vocales"){
        result = palabra.match(/[aeiouAEIOU]/g)
        return result ? result.length : 0;
    }else if(filtro === "consonantes"){
        result = palabra.match(/[bcdfghjklmnñpqrstvwxyzBCDFGHJKLMNÑPQRSTVWXYZ]/g)
        return result ? result.length : 0;
    }
}
//console.log(desglosarString("murcielagos", "vocales"))
//console.log(desglosarString("murcielagos", "consonantes"))

/*
Punto 2:
Desarrolle una funcion llamada twoSum que reciba una lista de numero enteros y otro numero entero y retorne
los indices de los numeros del arreglo que sumados sean el otro numero.
*/
function twoSum(nums, objetivo) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === objetivo) {
                return [i, j];
            }
        }
    }
    return []
}
//console.log(twoSum([3, 7, 11, 15], 9));

/*
punto 3:
Desarrolle una funcion llamada conversionRomana que reciba una string de cifras romanas y retorne el
equivalente en cifras arábigas.
*/
function conversionRomana(cadena){
  const valores = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  let letras = cadena.split("");
  let romano = letras.map(letra => valores[letra]);
  let arabigo = 0
    for(let i = 0; i < romano.length; i++){
        if (romano[i] < romano[i+1]){
            arabigo -= romano[i]
        } else {
            arabigo += romano[i]
        }
        
    }
    return arabigo
}
//console.log(conversionRomana("MCMXCVII"))


/*
punto 4:
Desarrolle una funcion llamada descomposicion que reciba una string de palabras separada por comas, donde
la primera palabra es la palabra a descomponer y el resto son el diccionario a utilizar. La función debe retornar
las dos palabras del diccionario que compongan la palabra a descomponer.
*/

function descomposicion(palabra){
    let diccionario = palabra.split(",")
    let objetivo = diccionario[0]
    for (let i = 1; i < diccionario.length; i++) {
        for (let j = 2; j < diccionario.length; j++) {
            if (diccionario[i] + diccionario[j] === objetivo) {
                return [diccionario[i], diccionario[j]];
            }
        }
    }
    return []
}
//console.log(descomposicion("malhumor,al,hum,humor,m,mal,malhu"))

export { desglosarString, twoSum, conversionRomana, descomposicion };
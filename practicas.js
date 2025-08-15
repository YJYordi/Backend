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
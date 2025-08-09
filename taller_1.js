//Punto 1
function convertidorTemp(temp){
    F = temp * (9/5) + 32
    return F
}

//Punto 2
function resolvedor(a, b, c) {
    let discriminante = b * b - 4 * a * c;
    let raiz = Math.sqrt(discriminante);

    let resultado1 = (-b + raiz) / (2 * a);
    let resultado2 = (-b - raiz) / (2 * a);

    if (resultado1 > resultado2) {
        return resultado1;
    } else {
        return resultado2;
    }
}

//Punto 3
function mejorParidad(num){
    if (num%2 == 0){
        return "par"
    } else {
        return "impar"
    }
}

//Punto 4
function peorParidad(num){
    if (num==1){
        return "impar"
    }else  if(num==3){
        return "impar"
    }else if(num==5){
        return "impar"
    }else if(num==7){
        return "impar"
    }else if(num==9){
        return "impar"
    }else if(num==2){
        return "par"
    }else if(num==4){
        return "par"
    }else if(num==6){
        return "par"
    }else if(num==8){
        return "par"
    }else if(num==10){
        return "par"
    }
}
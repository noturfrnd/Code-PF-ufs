// Pureza!

// Questão 2
function areaCirculo (raio){
    const pi = 3.14;
    return pi * raio * raio;
}

console.log(`Area do circulo com raio 5: ${areaCirculo(5)}`);
console.log(`Area do circulo com raio 10: ${areaCirculo(10)}`);
console.log(`Area do circulo com raio 3.14: ${areaCirculo(3.14)}`);

// Questão 3 usando propriedade da desigualdade traingular onde a + b > c;
function fMedidasTriang(ladoA, ladoB, ladoC){
    if(ladoA + ladoB > ladoC){
        console.table({'Lado A':ladoA, 'Lado B': ladoB, 'Lado C': ladoC, 'Forma Triangulo': true});
        return true; 
    }
    console.table({'Lado A':ladoA, 'Lado B': ladoB, 'Lado C': ladoC, 'Forma Triangulo': false});
    return false; 
}

console.log(`Forma triangulo? ${fMedidasTriang(4,4,7)}`);
console.log(`Forma triangulo? ${fMedidasTriang(4,3,12)}`);
console.log(`Forma triangulo? ${fMedidasTriang(8,4,11)}`);

// Questao 4
function classifyTriangle(ladoA, ladoB, ladoC){
    if (ladoA == ladoB && ladoB == ladoC){
        return "Triangulo equilatero";
    }
    else if (ladoA != ladoB && ladoB != ladoC && ladoC != ladoA){
        return "Triangulo Escaleno";
    }
    else {
        return "Triangulo isoceles";
    }
}

console.log(`Tipo de triangulo: ${classifyTriangle(2,2,3)}`);
console.log(`Tipo de triangulo: ${classifyTriangle(2,2,2)}`);
console.log(`Tipo de triangulo: ${classifyTriangle(2,8,3)}`);

// Questão 5
function distEuclid(x1,y1,x2,y2){
    const distancia = Math.sqrt(((x1-x2) * (x1-x2)) + ((y1-y2) * (y1-y2)));
    return distancia;
}

console.log(`Distancia euclidiana de (x1,y1), (x2,y2): ${distEuclid(2,3,5,6)}`);

// Questao 6
function quantosIguais(a, b, c){
    if(a == b && a == c){
        return 3;
    }else if(a != b && b != c && a != c){
        return 0;
    }else return 2
}

console.log(`Quantos numeros sao iguais: ${quantosIguais(2,4,8)}`);
console.log(`Quantos numeros sao iguais: ${quantosIguais(2,4,2)}`);
console.log(`Quantos numeros sao iguais: ${quantosIguais(8,8,8)}`);


function menorValor2(valorA, valorB){
    if (valorA == valorB){
        return valorA;
    }
    if(valorA > valorB){
        return valorB;
    }
    return valorA;
}
// Questao 7
function menorValor3(valorA, valorB, valorC){
    if(valorA == valorB && valorA == valorC){
        console.error("Todos os valores são iguais");
        return valorA;
    }
    if (valorC < valorB && valorC < valorA){
        return valorC;
    } return menorValor2(valorA, valorB);
}


console.log(`Valores iguais: ${menorValor3(2,2,3)}`);
console.log(`Valores iguais: ${menorValor3(2,2,2)}`);
console.log(`Valores iguais: ${menorValor3(2,8,3)}`);
console.log(`Valores iguais: ${menorValor3(8,99,3)}`);
console.log(`Valores iguais: ${menorValor3(8,2,3)}`);

// Questao 8 
function fQuadratico(valor){
    const quadrado = valor * valor;
    const quartaPotencia = quadrado * quadrado;
    console.table({"Valor ao quadrado: ": quadrado, "Valor elevado a quarta potencia: ": quartaPotencia});
    return valor;
}

console.log(fQuadratico(2));
console.log(fQuadratico(3));
console.log(fQuadratico(8));
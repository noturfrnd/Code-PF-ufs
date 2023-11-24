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





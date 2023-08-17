const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]);

valores[4] = 10;
console.log(valores);
console.log(valores.length); //quantos elementos tem no array

valores.push({id: 3}, false, null, 'teste'); //passar valores pra dentro do array
console.log(valores);
// não é uma boa prática misturar dados de tipos diferentes no mesmo array

console.log(valores.pop()) //tira do array e retorna o ultimo valor
delete valores[0]; //deleta valor de indice 0 do array
console.log(valores);

console.log(typeof valores);
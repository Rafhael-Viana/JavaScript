//operadores bitwise trabalham com valores binários

//transformam o valor das variáveis(number) em binários e faz a operação lógica entre eles

//operador & (AND)  |>Retorna 1 se os dois bits forem 1
let n1 = 10
let n2 = 14

let n3 = n1 & n2

//retorna 10 em binário(1010 and 1110 = 1010)
console.log(n3);

//operador | (OR)   |>Retorna 1 se algum dos bits for 1
let N1 = 11
let N2 = 14

let N3 = N1 | N2

//retorna 15 em binário(1011 or 1110 = 1111)
console.log(N3);

//operador ^ (XOR)  |>Retorna 1 se o bits forem diferentes
let x1 = 13
let x2 = 11

let x3 = x1 ^ x2    

//retorna 6 em binário(1101 or 1011 = 0110)
console.log(x3);

//operadores "<<" e ">>" (Deslocamento de bits)

let y = 10
let res = y << 1    //move 1 bit para a esquerda e duplica o valor
let res2 = y >> 2   //move 2 bits para a esquerda e divide por 4 o valor.
console.log(res)    //(1010 -------> 10100)
console.log(res2)   //(1010 ------->  0010)
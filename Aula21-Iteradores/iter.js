//* Coleções Iteráveis

//Arrays
//String
//Map
//Sets

//? Caso 1 - Coleção Numérica

// const valores = [1,32,43]
// const it_valores = valores[Symbol.iterator]()

// console.log(valores);
// for (let i of valores)
//     console.log(it_valores.next());
// console.log(it_valores.next());

//? Caso 2 - Coleção String

const txt = 'Youtube'
const it_txt = txt[Symbol.iterator]()

console.log(txt)
for(let i of txt)
    console.log(it_txt.next())
console.log(it_txt.next())
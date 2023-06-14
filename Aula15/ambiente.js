let num = [5,4,6,7,2]
num.sort() // organiza os valores em ordem crescente
console.log(`Nossa template string é ${num}`)
console.log(`A string tem ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

// for(let p = 0; p<num.length; p++){
//     console.log(num[p])
// }

// for(let p in num){
//     console.log(`A posição ${p} tem o valor ${num[p]}`)
// }

let p = num.indexOf(6)
console.log(`A posição ${p}`)
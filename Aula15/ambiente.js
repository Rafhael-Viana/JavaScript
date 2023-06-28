let num = [5,4,6,7,2, 34, 32, 98, 54]
num.sort() // organiza os valores em ordem crescente
console.log(`Nossa template string é ${num}`)
console.log(`A string tem ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let maior = 0
for(let p = 0; p<num.length; p++){
    console.log(num[p])
    if(num[p] > maior){
        maior = num[p]
    }
}
console.log(`O maior número é ${maior}.`)

// for(let p in num){
//     console.log(`A posição ${p} tem o valor ${num[p]}`)
// }

let p = num.indexOf(6)
console.log(`A posição ${p}`)
console.log(num[p])
let num = [5,4,6,7,2, 'teste', 32, 98]

num.sort() // organiza os valores em ordem crescente

console.log(`Nossa template string é ${num}`)
//length
console.log(`A string tem ${num.length} posições.`)
// x[0]
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
let q = num.lastIndexOf('teste')
console.log(`A posição ${p}`)

//push - coloca um valor na ultima posição do vetor
let arr = [1,'primeiro',3,'terceiro',5,'quinto', 6, 'seis']
//push - adiciona um valor na ultima posição do vetor
arr.push(12 , 'twelve')
console.log(arr)

//pop - remove o ultimo elemento do array
arr.pop()
console.log(arr)

//unshift - adiiona um elemento no inicio do array
arr.unshift('teste')
console.log(arr)

//shift - remove o primeiro elemento do array
arr.shift()
console.log(arr)

//acessar o último elemento do array
console.log(arr[arr.length - 1])

//isArray - verifica se realmente é um array
console.log(Array.isArray(arr)) // --- retorna true ou false

//splice - adiciona e/ou remove elementos no meio de um array
arr = [1,2,3,4,5,6]
arr.splice(2,0,99) // --- (indice desejado, nº de elementos a ser deletados, elemento a ser adicionado)
console.log(arr)
arr.splice(6,1)
console.log(arr)

//join - transforma o array em uma única string
let arr2 = ['O','rato','roeu','a','roupa','do','rei','de','Roma']
console.log(arr2.join(' '))

//reverse - inverte as posições de um array
console.log(arr.reverse())






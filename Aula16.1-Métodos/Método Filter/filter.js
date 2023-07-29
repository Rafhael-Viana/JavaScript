const idades = [12,14,22,54,11,67,85,43,23,9,5]
idades.sort()
const maior = idades.filter((v,i,arr) => {
    if(v >= 18){
        return v
    }
})
const menor = idades.filter((v,i,arr) => {
    if(v < 18){
        return v
    }
})

console.log(maior)
console.log(menor)
console.log(idades)
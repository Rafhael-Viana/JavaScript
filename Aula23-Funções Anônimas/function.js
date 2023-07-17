
//declarando função normal

function soma(a,b){
    return a+b
}
console.log(soma(1,2));

//declarando função anônima

const Soma = function(...num){
    let res = 0
    for(n of num){
        res+=n
    }
    return res
}


console.log(Soma(4,5,9))
console.log(Soma(1,2,3))
console.log(Soma(1,2))
console.log(Soma(1))
console.log(Soma)
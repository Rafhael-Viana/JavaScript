// function* cores(){
//     yield "Vermelho"
//     yield "Verde"
//     yield "Amarelo"
//     yield "Azul"
// }

// const itc = cores()
// console.log(itc.next().value)
// console.log(itc.next().value)
// console.log(itc.next().value)
// console.log(itc.next().value)
// console.log(itc.next().value)


// function* perguntas(){
//     const nome = yield "Qual seu nome?"
//     const esporte = yield "Qual seu esporte favorito?"
//     return `Seu nome é ${nome} e seu esporte favorito é ${esporte}.`
// }

// const itp = perguntas()
// console.log(itp.next().value)
// console.log(itp.next("Bruno").value)
// console.log(itp.next("basquete").value)

function* contador(){
    let i = 0
    while(true){ 
        yield ++i
        if(i >= 10)
            break
    }
}
const itct = contador()
for(let c of itct){
    console.log(c);
}
const arr = document.querySelector('#array')
const btn_reduce = document.querySelector("#btn-reduce")
const result = document.querySelector('#res')

const elArr = [1,2,3,4,5]
let prev = []
let curr = []
let dobro = []
arr.innerHTML += `[${elArr}]`

btn_reduce.addEventListener('click', evt => {
    const ret = elArr.reduce((ant,atual,pos)=>{
        prev.push(ant)
        curr.push(atual)
        dobro.push(atual*2)
        return ant + atual
    })
    result.innerHTML = `Soma: ${ret} <br> Anterior: ${prev} <br> Atual: ${curr} <br> Dobro: ${dobro}`
})
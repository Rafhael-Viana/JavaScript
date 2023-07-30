const arr = document.querySelector('#array')
const btn_verify = document.querySelector("#btn-verify")
const result = document.querySelector('#res')

const elArr = [21,5,19,18,18,30]
arr.innerHTML += `[${elArr}]`

btn_verify.addEventListener('click', (evt) => {
    result.innerHTML = `Resultado: Array não conforme.`
    const ret = elArr.every((el) =>{
        if(el<18)
            result.innerHTML = `Resultado: Array não conforme - Posição ${i}`
        return el >= 18
    })
    if(ret)
        result.innerHTML = 'Resultado: OK'
    console.log(ret)
})